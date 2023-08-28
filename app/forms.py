from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired, NumberRange

class CalculatorEntryForm(FlaskForm):
    guests = IntegerField('1. Number of Guests:', default=300, validators=[DataRequired(message="Please enter the number of attendees")])
    duration = IntegerField('2. Length of Event (hours):',default=4, validators=[DataRequired(message='Please enter the event length')])
    percentageDrinking = IntegerField('3. What % of guests will Drink Alcohol:', default=100)
    percentageDrinkingMore = StringField('3. What % of guests will Drink Alcohol:', default='100')
    # wineBottleOptionsRed = IntegerField(default=2, validators=[DataRequired(message='Please enter a 1 or a 2')])
    # wineBottleOptionsWhite = IntegerField(default=2, validators=[DataRequired(message='Please enter a 1 or a 2')])
    wineBottleOptionsWhite = SelectField('White Options', default=2,choices=[("1","1"),("2","2")])
    wineBottleOptionsRed = SelectField('Red Options', default=2,choices=[("1","1"),("2","2")])
    havingChampagneToast = BooleanField('6. Having a Champagne Toast:')
    drinkingLevel = SelectField('Drinking Level:', default='average',choices=[("high","high"),("average","average"),("low","low")])
    submit = SubmitField('Calculate bar package')

