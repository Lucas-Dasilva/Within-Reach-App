from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, TextAreaField, validators, ValidationError, PasswordField, BooleanField
from wtforms.validators import ValidationError, DataRequired, EqualTo, Length, Email
from wtforms.ext.sqlalchemy.fields import QuerySelectMultipleField
from wtforms.widgets import ListWidget, CheckboxInput

from app.models import Post, Tag, User

class PostForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    happiness_level = SelectField('Happiness Level',choices = [(3, 'I can\'t stop smiling'), (2, 'Really happy'), (1,'Happy')])
    body = TextAreaField('Body', [validators.required(), validators.length(min = 1, max = 1500, message = "(0-1500 characters)")])
    tag =  QuerySelectMultipleField( 'Tag', query_factory=lambda: Tag.query.all(), get_label=lambda x: x.name, 
            widget=ListWidget(prefix_label=False), option_widget=CheckboxInput() )
    submit = SubmitField('Post')

class SortForm(FlaskForm):
    choices = SelectField('Sort by: ',choices=[(4, 'Date'), (3, 'Title'), (2, '# of likes'), (1, 'Happiness level')])
    refresh = SubmitField('Refresh')
    checkbox = BooleanField('Display my posts only')

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    password2 = PasswordField('Repeat Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Register')
    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError('Username taken! Choose a different username.')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Email taken! Choose a different email.')

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember me')
    submit = SubmitField('Sign In')