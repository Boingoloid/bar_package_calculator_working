from app import app
import sys
from flask import render_template, flash, redirect
from flask import jsonify
from app.forms import CalculatorEntryForm
import math
import json
from flask import request
from flask_cors import CORS
import os
from flask import send_from_directory


CORS(app, resources=r'/email_submit*')
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_SUPPORTS_CREDENTIALS'] = True



from app.inventory.inventory import bottles
# from app.inventory.inventory import getInventory
from app.inventory.inventory import spirits_options
# print(spirits_options)
print("Hiiiiiiiiiiiiiiiiiiiii")


@app.before_request
def before_request():
    if 'DYNO' in os.environ:
        if request.url.startswith('http://'):
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.route('/', methods=['GET', 'POST'])
def calculatorEntry():
    form = CalculatorEntryForm()
    print("Spirit options")
    print(spirits_options)
    return render_template('calculator-entry.html', form=form, bottles=bottles, spirits_options=spirits_options)



