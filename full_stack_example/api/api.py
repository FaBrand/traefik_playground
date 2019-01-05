import os
import random
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

class Config(object):
     SECRET_KEY = os.environ.get('SECRET_KEY') or 'this-is-a-really-secret-key'
     SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://testusr:password@postgres:5432/testdb'
     SQLALCHEMY_TRACK_MODIFICATIONS = False

app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
db = SQLAlchemy(app)
migrate = Migrate(app, db)

@app.route("/")
def root():
    return jsonify({'reached': 'root', 'headers': dict(request.headers)})

@app.route("/api")
def api():
    return jsonify({'reached': 'api', 'headers': dict(request.headers)})

@app.route("/api/data")
def api_data():
    return jsonify({'data': [random.randint(1, 100) for _ in range(1,50)]})

if __name__ == "__main__":
    app.run(host='0.0.0.0')
