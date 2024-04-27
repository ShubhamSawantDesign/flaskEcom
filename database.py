#this is Python code which will help us to connect to Database 
from flask_mysqldb import MySQL
from config import DATABASE_CONFIG

def connect_to_database(app):
    mysql = MySQL(app)
    app.config['MYSQL_HOST'] = DATABASE_CONFIG['host']
    app.config['MYSQL_USER'] = DATABASE_CONFIG['user']
    app.config['MYSQL_PASSWORD'] = DATABASE_CONFIG['password']
    app.config['MYSQL_DB'] = DATABASE_CONFIG['database']
    return mysql