from flask import Flask, jsonify
import os
import time

app = Flask(__name__)


@app.route("/health")
def health():
    return jsonify({"status": "healthy", "timestamp": time.time()})


@app.route("/api/items")
def get_items():
    items = [
        {"id": 1, "name": "Widget", "price": 9.99},
        {"id": 2, "name": "Gadget", "price": 19.99},
        {"id": 3, "name": "Doohickey", "price": 4.99},
    ]
    return jsonify(items)


@app.route("/api/status")
def status():
    return jsonify(
        {
            "app": "inventory-api",
            "version": "1.0.0",
            "debug": os.environ.get("DEBUG", "false"),
            "environment": os.environ.get("FLASK_ENV", "production"),
        }
    )


if __name__ == "__main__":
    debug = os.environ.get("DEBUG", "false").lower() == "true"
    app.run(host="0.0.0.0", port=5000, debug=debug)
