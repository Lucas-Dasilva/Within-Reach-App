from flask import Flask, session
from config import Config
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
from flask_moment import Moment
from flask_login import LoginManager

application = app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
#Secret key for sessions
app.secret_key = "hello"
# flask sessions expire once you close the browser unless you have a permanent session
#session.permanent = True
app.permanent_session_lifetime = timedelta(days = 1)
moment = Moment(app)

login = LoginManager(app)
login.login_view = 'login'


from app import routes, models, errors



