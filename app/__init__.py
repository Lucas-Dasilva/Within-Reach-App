from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from datetime import timedelta
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
CORS(app, support_credentials=True)
#Secret key for sessions
app.secret_key = "hello"
app.permanent_session_lifetime = timedelta(days = 1)
from app import routes, models, errors

from flask_moment import Moment
moment = Moment(app)


