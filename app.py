# app.py
from flask import Flask, render_template, request
from Authenticationmanager import loginUser

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')



@app.route('/products')
def products():
    return 'This is product page'


@app.route('/doLogin', methods=['POST']) 
def doLogin():
     return loginUser

if __name__ == '__main__':
    app.run(debug=True)
