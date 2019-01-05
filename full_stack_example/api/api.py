import os
import random
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

class Config(object):
     SECRET_KEY = os.environ.get('SECRET_KEY') or 'this-is-a-really-secret-key'
     SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///:memory:')
     SQLALCHEMY_TRACK_MODIFICATIONS = False

app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow(app)

class DataEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.Integer)

class DataEntrySchema(ma.ModelSchema):
    class Meta:
        model = DataEntry

data_entry_schemas = DataEntrySchema(many=True)

@app.route("/")
def root():
    return jsonify({'reached': 'root', 'headers': dict(request.headers)})

@app.route("/api")
def api():
    return jsonify({'reached': 'api', 'headers': dict(request.headers)})

@app.route("/api/data", methods=['GET'])
def api_data():
    all_data = DataEntry.query.all()
    return data_entry_schemas.jsonify(all_data)

@app.route("/api/data", methods=['POST'])
def api_add_data():
    if not request.is_json:
        abort(400)
    content = request.get_json()

    if not all(isinstance(x, int) for x in content):
        abort(400, 'Payload must be list of integers')

    db.session.add_all([DataEntry(data=i) for i in content])
    db.session.commit()
    return jsonify({'success':True})

if __name__ == "__main__":
    app.run(host='0.0.0.0')
