from datetime import datetime

from app import db


# class User(db.model):
#     id = unique id
#     profile = unique profile pic
#     City_Location = location

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=0)
    latitude = db.Column(db.String(1500))
    longitude = db.Column(db.String(1500))
    replies = db.relationship('Reply', backref='replypost', lazy='dynamic')
    def repr(self):
        return '<Post {}-{} >'.format(self.id,self.body)



class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=0)
    post = db.Column(db.Integer, db.ForeignKey('post.id'))