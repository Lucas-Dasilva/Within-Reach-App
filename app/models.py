from datetime import datetime

from app import db


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=0)
    latitude = db.Column(db.String(1500))
    longitude = db.Column(db.String(1500))
    distance = db.Column(db.Float, default = 0)


class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=0)