from datetime import datetime

from sqlalchemy.sql.elements import False_
from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default= 1)
    latitude = db.Column(db.String(1500))
    longitude = db.Column(db.String(1500))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    def repr(self):
        return '<Post {}-{} >'.format(self.id,self.body)
    replies = db.relationship('Reply', backref='replypost', lazy='dynamic')
    distance_from_user = db.relationship('userDistance',back_populates='_post', lazy = 'dynamic') 

class userDistance(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), primary_key=True)
    distance = db.Column(db.Float)
    _user = db.relationship('User')
    _post = db.relationship('Post')
    def __repr__(self):
        return '<UserDistance ({},{},{}) >'.format(self.user_id,self.post_id,self.distance)


class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=1)
    post = db.Column(db.Integer, db.ForeignKey('post.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), unique = True)
    password_hash = db.Column(db.String(128))
    latitude = db.Column(db.String(1500))
    longitude = db.Column(db.String(1500))
    karma = db.Column(db.Integer, default = 100)
    def __repr__(self):
        return '<User {}-{};>'.format(self.id, self.username)
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    def get_password(self, password):
        return check_password_hash(self.password_hash, password)
    posts = db.relationship('Post', backref='writer', lazy='dynamic')
    reactions = db.relationship('reactedPost', backref='user', lazy='dynamic')
    reactionsR = db.relationship('reactedReply', backref='user', lazy='dynamic')
    distance_from_post = db.relationship('userDistance',back_populates='_user', lazy = 'dynamic') 



#Post that user has reacted to
class reactedPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post = db.Column(db.Integer, default = 0)
    # Nothing = 0, upvote = 1, downvote = -1
    status = db.Column(db.Integer, default = 0)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

#Replys that user has reacted to
class reactedReply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reply = db.Column(db.Integer, default = 0)
    # Nothing = 0, upvote = 1, downvote = -1
    status = db.Column(db.Integer, default = 0)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

@login.user_loader
def load_user(id):
    return User.query.get(int(id))