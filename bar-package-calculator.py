from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
app.config['DEBUG'] = True
# app.config['CORS_HEADERS'] = 'Content-Type'
# cors = CORS(app)
# from app import routes


# app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'
# app.config['TEMPLATES_AUTO_RELOAD'] = True
# app.config['TESTING'] = True
# app.testing = True

# from myapp.views import *
# from flask_wtf.csrf import CSRFProtect

# Explanation of the need for this code:
# https://pythonhow.com/python-tutorial/flask/How-a-Flask-app-works/ 
# https://realpython.com/if-name-main-python/#:~:text=name%2Dmain%20idiom.-,In%20Short%3A%20It%20Allows%20You%20to%20Execute%20Code%20When%20the,is%20executed%20as%20a%20script.




