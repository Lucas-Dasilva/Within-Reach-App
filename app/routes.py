from __future__ import print_function
import sys
from datetime import datetime
from flask import render_template, flash, redirect, url_for, request
from flask_sqlalchemy import sqlalchemy

from app import app, db
from app.forms import PostForm, SortForm
from app.models import Post
import requests, json


@app.before_first_request
def initDB(*args, **kwargs):
    db.create_all()
    

@app.route('/postsmile', methods=['GET', 'POST'])
def createpost():
    tempPost = PostForm()
    if tempPost.validate_on_submit():
        if (tempPost.body.data is not None):
            newpost = Post(body = tempPost.body.data)
            db.session.add(newpost)
            db.session.commit()
            flash('New Post created!')
            return redirect(url_for('index'))
    return render_template('create.html', form = tempPost)

@app.route('/yeet/<post_id>', methods=['GET'])
def addLike(post_id):
    post = Post.query.get(post_id)
    post.likes = post.likes +1
    db.session.commit()
    return redirect(url_for('index', post=post))

@app.route('/nah/<post_id>', methods=['GET'])
def subLike(post_id):
    post = Post.query.get(post_id)
    post.likes = post.likes -1
    db.session.commit()
    return redirect(url_for('index', post=post))

@app.route('/delete/<post_id>', methods=['POST', 'DELETE'])
def delete(post_id):
    thepost = Post.query.get(post_id)
    
    db.session.commit()
    db.session.delete(thepost)
    flash('Post deleted.')
    db.session.commit()
    return redirect(url_for('index', thepost = thepost))

@app.route('/')
def getIpLocation(Ip_Adress, Token_Key):
    url = 'http://api.ipstack.com/{ip}?access_key={key}'.format(ip= Ip_Adress,key= Token_Key)
    headers = {'Content-Type': 'application/json'}
    response = requests.get(url, headers)

    print('Request = ', response)
    print('**********************')
    #print(response.text)
    parsed_json = (json.loads(response.text))
    print(json.dumps(parsed_json, indent=4, sort_keys=True))

@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    yeetcount = Post.query.count()
    sortForm = SortForm()
    if request.method == 'POST':
        option = int(sortForm.sort.data)
        print("sort integer value", option)  

        if (option == 1):
            posts = Post.query.order_by(Post.likes.desc())
        else:
            posts = Post.query.order_by(Post.timestamp.desc())
    else: 
        posts = Post.query.order_by(Post.timestamp.desc())
    return render_template('index.html', title="Smile Portal", posts=posts.all(), yeetcount =  posts.count(), sortform = sortForm)



