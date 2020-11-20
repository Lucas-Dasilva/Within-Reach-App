from datetime import datetime
from app import db


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



class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1500))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    likes = db.Column(db.Integer, default=0)
    liked = db.Column(db.Boolean, default=False, nullable=False)
    disliked = db.Column(db.Boolean, default=False, nullable=False)
    
    post = db.Column(db.Integer, db.ForeignKey('post.id'))
