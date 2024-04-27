# This Class Is written with defination required for Authetincation 
# here we use bcrypt to validate bcrypt password 

from flask import request
import bcrypt

def loginUser(mysql):
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT user_id, email, password FROM tbl_authentication WHERE email = %s", (email,))
        user = cursor.fetchone()

        if user:
            user_id, _, hashed_password = user
            if bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8')):
                return {'message': 'Login successful', 'user_id': user_id, 'email': email}
            else:
                return {'message': 'Invalid password'}, 401
        else:
            return {'message': 'User not found'}, 404