from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/greet', methods=['POST'])
def greet():
    data = request.json
    name = data.get('name', '').strip()
    if name:
        greeting = f"Hello, {name}!"
    else:
        greeting = "Hello, stranger!"
    return jsonify({'greeting': greeting})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
