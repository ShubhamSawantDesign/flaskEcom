# app.py
from flask import Flask, jsonify, render_template, redirect, url_for, session
from Authenticationmanager import loginUser
from database import connect_to_database
import os


app = Flask(__name__)
mysql = connect_to_database(app)
secret_key = os.urandom(24)
app.secret_key = secret_key

@app.route('/')
def main():
    return render_template('index.html')


@app.route('/products')
def products():
    return 'This is product page'

# Login and authentiate the user
@app.route('/doLogin', methods=['POST']) 
def do_login():
    login_result = loginUser(mysql)
    if 'user_id' in login_result:
        session['user_id'] = login_result['user_id']  # Set user ID in session
        session['email'] = login_result['email'] 
        # Redirect to index.html after successful login
        return redirect(url_for('main'))
    else:
        # Handle unsuccessful login
        return jsonify(login_result), 401

# Logout the authentiated user
@app.route('/logout')
def logout():
    # Clear user ID from session (logout)
    session.pop('user_id', None)
    # Redirect to the home page or any other desired page after logout
    return redirect(url_for('main'))


if __name__ == '__main__':
    app.run(debug=True)
