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
    # Get a cursor from the database connection
    cursor = mysql.connection.cursor()
    # Retrieve data from the database
    cursor.execute("SELECT * FROM banners WHERE status = '1'")
    banners = cursor.fetchall()

    # Define SQL queries
    categories_query = "SELECT * FROM categories WHERE main_cat = '0' LIMIT 7;"
    currency_query = "SELECT * FROM rates WHERE status = '1';"

    # Check if user is logged in and set the user email or session ID accordingly
    if 'user_id' in session:
        user_email = session['email']
        user_cart_query = f"SELECT * FROM cart WHERE user_email = '{user_email}';"
    else:
        session_id = session.get('session_id')
        if session_id is not None:
            user_cart_query = f"SELECT * FROM cart WHERE session_id = '{session_id}';"
        else:
            user_cart_query = ""

    # Execute SQL queries
    cursor.execute(categories_query)
    categories = cursor.fetchall()

    cursor.execute(currency_query)
    currencyall = cursor.fetchall()

    if user_cart_query:
        cursor.execute(user_cart_query)
        user_cart = cursor.fetchall()
    else:
        user_cart = []

    # Close the cursor and database connection
    cursor.close()



    # Render the index.html template with the retrieved data
    return render_template('index.html', banners=banners, categories=categories, currencyall=currencyall, user_cart=user_cart)



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


@app.route('/templates/<int:id>')
def templates(id):
    # Your route logic goes here
    return f'Templates for category ID {id}'


if __name__ == '__main__':
    app.run(debug=True)
