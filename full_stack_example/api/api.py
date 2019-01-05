import random
from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
app.url_map.strict_slashes = False
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

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
