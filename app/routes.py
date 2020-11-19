from __future__ import print_function
import sys
from datetime import datetime
from flask import render_template, flash, redirect, url_for, request, session
from flask_sqlalchemy import sqlalchemy
from math import sin,cos, sqrt, atan2, radians

from app import app, db
from app.forms import PostForm, SortForm, ReplyForm
from app.models import Post, Reply
import requests, json



@app.before_first_request
def initDB(*args, **kwargs):
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def location():
    #Checking if we got the location completely
    if 'latitude' in session:
        return redirect(url_for('index'))
    else:
        return render_template('location.html', title="Welcome to Within Reach")

@app.route("/getLocation", methods = ['POST'])
def locationHandler():
    if request.method == 'POST':
        location = request.get_json()
    #Must be rounded to avoid calc_dist issues
    session['latitude'] = round(location['latitude'],7)
    session['longitude'] = round(location['longitude'],7)

    return ("Everythings fine", 200)

#Main home page: Sorts, only displays nearby posts
@app.route('/index', methods=['GET', 'POST'])
def index():
    
    #yeetcount is number of posts
    yeetcount = Post.query.count()
    sortForm = SortForm()
    if 'latitude' in session:
        for p in Post.query.all():
            calc_dist(p.id)
    if request.method == 'POST':
        option = 1
        #option = int(sortForm.sort.data)
        print("option:", option)

        if (option == 1):
            posts = Post.query.order_by(Post.likes.desc())
        else:
            posts = Post.query.order_by(Post.timestamp.desc())
    else: 
        posts = Post.query.order_by(Post.timestamp.desc())
    return render_template('index.html', title="Welcome to Within Reach", posts= posts, yeetcount =  posts.count(), sortform = sortForm)


#Calculate Distance of user to other posts 
def calc_dist(post_id):

    #Radius of earth in miles
    R = 3958.8
    post = Post.query.get(post_id)

    #Posts locations
    lat1 = radians(float(post.latitude))
    lon1 = radians(float(post.longitude))
    #Users location coordinates with session
    lat2 = radians(session['latitude'])
    lon2 = radians(session['longitude'])
    dlon = (lon2) - (lon1)
    dlat = (lat2) - (lat1)

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    session[str(post_id)] = distance
    
    #add distance to the db colummn, in order to sort it out
    #print(distance)
    return render_template('index.html')


#Create Post: Creates new post
@app.route('/postmsg', methods=['GET', 'POST'])
def createpost():
    
    tempPost = PostForm()
    if tempPost.validate_on_submit():
        if (tempPost.body.data is not None):
            newpost = Post(body = tempPost.body.data, latitude = session['latitude'],longitude = session['longitude'])
            db.session.add(newpost)
            db.session.commit()
            yeetcount = Post.query.count()            
            flash('New Post created!')
            return redirect(url_for('index'))
    return render_template('create.html', form = tempPost)


#Allows user to like posts
@app.route('/postLike/<post_id>', methods=['GET'])
def addLike(post_id):
    post = Post.query.get(post_id)
    if post.liked == True:
        post.likes = post.likes -1
        post.liked = False

    elif post.disliked == True:
        post.likes = post.likes +2
        post.liked =  True
        post.disliked = False
    else:
        post.likes = post.likes +1
        post.liked =  True
    db.session.commit()
    return redirect(url_for('index', post=post))

#Allows users to dislike posts, if a post gets less than 5 likes then it gets deleted
@app.route('/postDislike/<post_id>', methods=['GET'])
def disLike(post_id):
    post = Post.query.get(post_id)
    if post.disliked == True:
        post.likes = post.likes +1
        post.disliked = False
    elif post.liked == True:
        post.likes = post.likes -2
        post.liked = False
        post.disliked =  True
    else:
        post.likes = post.likes -1
        post.disliked =  True
    # elif post.likes < -5:
    #     db.session.delete(post)
    db.session.commit()

    return redirect(url_for('index', post=post))
  
@app.route('/postcomments/<post_id>', methods=['GET', 'POST'])
def comments(post_id):
    #Original post to stay at the top
    post = Post.query.get(post_id)
    form = ReplyForm()
    if form.validate_on_submit():
        if (form.body.data is not None):
            newreply = Reply(body = form.body.data, post = post_id)
            db.session.add(newreply)
            db.session.commit()
            flash('New Reply created!')
            replys = Reply.query.order_by(Reply.timestamp.desc())

    else: 
        replys = Reply.query.order_by(Reply.timestamp.desc())

    return render_template('comments.html', post= post, form = form, replys = replys.filter(post_id == Reply.post))

#Allows user to like posts
@app.route('/repLike/<post_id>', methods=['GET'])
def addLikeCom(post_id):
    reply = Reply.query.get(post_id)
    if reply.liked == True:
        reply.likes = reply.likes -1
        reply.liked = False

    elif reply.disliked == True:
        reply.likes = reply.likes +2
        reply.liked =  True
        reply.disliked = False
    else:
        reply.likes = reply.likes +1
        reply.liked =  True
    replys = Reply.query.order_by(Reply.timestamp.desc())

    db.session.commit()
    return redirect(url_for('comments', post_id=post_id))

#Allows users to dislike replys, if a reply gets less than 5 likes then it gets deleted
@app.route('/repDislike/<post_id>', methods=['GET'])
def disLikeCom(post_id):
    reply = Reply.query.get(post_id)
    if reply.disliked == True:
        reply.likes = reply.likes +1
        reply.disliked = False
    elif reply.liked == True:
        reply.likes = reply.likes -2
        reply.liked = False
        reply.disliked =  True
    else:
        reply.likes = reply.likes -1
        reply.disliked =  True
    # elif reply.likes < -5:
    #     db.session.delete(reply)
    replys = Reply.query.order_by(Reply.timestamp.desc())

    db.session.commit()

    return redirect(url_for('comments', post_id=post_id))
