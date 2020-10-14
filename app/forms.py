from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, TextAreaField, validators, ValidationError, PasswordField, BooleanField
from wtforms.validators import ValidationError, DataRequired, EqualTo, Length, Email
from wtforms.ext.sqlalchemy.fields import QuerySelectMultipleField
from wtforms.widgets import ListWidget, CheckboxInput

from app.models import Post

class PostForm(FlaskForm):
    body = TextAreaField('Body', [validators.required(), validators.length(min = 1, max = 1500, message = "(0-1500 characters)")])
    submit = SubmitField('Post')

class SortForm(FlaskForm):
    choices = SelectField('Sort by: ',choices=[(1, 'New'), (2, 'Hot')])
    refresh = SubmitField('Refresh')
    checkbox = BooleanField('Display my posts only')
