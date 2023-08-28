from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)
from app import routes


app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['TESTING'] = True
app.testing = True

# from myapp.views import *
# from flask_wtf.csrf import CSRFProtect