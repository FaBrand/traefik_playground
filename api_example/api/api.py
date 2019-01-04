from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route("/")
def root():
    return jsonify({'reached': 'root', 'headers': dict(request.headers)})

@app.route("/api")
def api():
    return jsonify({'reached': 'api', 'headers': dict(request.headers)})

if __name__ == "__main__":
    app.run(host='0.0.0.0')
