# This Class Is written with defination required for Authetincation 

from flask import request

def loginUser():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        return request.form