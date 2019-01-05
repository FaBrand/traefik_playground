import os
import random
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

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

class DataEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.Integer)

@app.route("/")
def root():
    return jsonify({'reached': 'root', 'headers': dict(request.headers)})

@app.route("/api")
def api():
    return jsonify({'reached': 'api', 'headers': dict(request.headers)})

@app.route("/api/data")
def api_data():
    all_data = DataEntry.query.all()
    return jsonify({'data': [d.data for d in all_data]})

if __name__ == "__main__":
    app.run(host='0.0.0.0')
