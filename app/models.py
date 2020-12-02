from datetime import datetime
from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


# thread_upvotes = db.Table('thread_upvotes',
#     db.Column('user_id', db.Integer, db.ForeignKey('users_user.id')),
#     db.Column('thread_id', db.Integer, db.ForeignKey('threads_thread.id'))
# )

# comment_upvotes = db.Table('comment_upvotes',
#     db.Column('user_id', db.Integer, db.ForeignKey('users_user.id')),
#     db.Column('comment_id', db.Integer, db.ForeignKey('threads_comment.id'))
# )


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
    likeStatus = db.Column(db.String(2), default = 0)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class postLikeStatus(db.Model):
    post = db.Column(db.Integer, default = 0)
    status = db.Column(db.String(2))

class replyLikeStatus(db.Model):
    reply = db.Column(db.Integer, default = 0)
    status = db.Column(db.String(2))

class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=0)
    liked = db.Column(db.Boolean, default=False, nullable=False)
    disliked = db.Column(db.Boolean, default=False, nullable=False)
    post = db.Column(db.Integer, db.ForeignKey('post.id'))
    likeStatus = db.Column(db.String(2), default = 0)
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

@login.user_loader
def load_user(id):
    return User.query.get(int(id))