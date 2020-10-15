from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, TextAreaField, validators, ValidationError, PasswordField, BooleanField
from wtforms.validators import ValidationError, DataRequired, EqualTo, Length, Email
from wtforms.ext.sqlalchemy.fields import QuerySelectMultipleField
from wtforms.widgets import ListWidget, CheckboxInput

from app.models import Post


class SortForm(FlaskForm):
    sort = SelectField('Choose sorting:', choices=[(2, 'New'), (1, 'Hot')])
    submit = SubmitField('Refresh')

class PostForm(FlaskForm):
    body = TextAreaField('Body', [validators.required(), validators.length(min = 1, max = 1500, message = "(0-1500 characters)")])
    submit = SubmitField('Post')

