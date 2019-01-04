from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def root():
    return jsonify({'reached': 'root'})

@app.route("/api")
def api():
    return jsonify({'reached': 'api'})

if __name__ == "__main__":
    app.run(host='0.0.0.0')
