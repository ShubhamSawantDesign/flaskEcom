# app.py
from flask import Flask, jsonify, render_template, request
from Authenticationmanager import loginUser
from database import connect_to_database

app = Flask(__name__)
mysql = connect_to_database(app)


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/products')
def products():
    return 'This is product page'

@app.route('/doLogin', methods=['POST']) 
def do_login():
    return jsonify(loginUser(mysql))

if __name__ == '__main__':
    app.run(debug=True)
