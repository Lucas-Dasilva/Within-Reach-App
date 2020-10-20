from __future__ import print_function
import sys
from datetime import datetime
from flask import render_template, flash, redirect, url_for, request
from flask_sqlalchemy import sqlalchemy
from math import sin,cos, sqrt, atan2, radians

from app import app, db
from app.forms import PostForm, SortForm, ReplyForm
from app.models import Post, Reply
import requests, json


@app.before_first_request
def initDB(*args, **kwargs):
    db.create_all()
   

#Main home page: Sorts, only displays nearby posts
@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    #yeetcount is number of posts
    yeetcount = Post.query.count()
    sortForm = SortForm()

    if request.method == 'POST':
        option = int(sortForm.sort.data)
        print("option:", option)

        if (option == 1):
            posts = Post.query.order_by(Post.likes.desc())
        else:
            posts = Post.query.order_by(Post.timestamp.desc())
    else: 
        posts = Post.query.order_by(Post.timestamp.desc())
    return render_template('index.html', title="Welcome To Yeet Nah", posts= Post.query.filter(Post.distance <= 20), yeetcount =  posts.count(), sortform = sortForm)

#Create Post: Creates new post
@app.route('/postsmile', methods=['GET', 'POST'])
def createpost():
    #Get json from ipTolocation function
    parsed_json = ipToLocation()
    prelatitude =  parsed_json["latitude"]
    prelongitude = parsed_json["longitude"]
    #print ("Latitude: " + str(prelatitude) +"\nLongitude: "+ str(prelongitude))
    
    tempPost = PostForm()
    if tempPost.validate_on_submit():
        if (tempPost.body.data is not None):
            newpost = Post(body = tempPost.body.data, latitude = prelatitude,longitude = prelongitude)
            db.session.add(newpost)
            db.session.commit()
            #Send to calc_dist with new post that has coordniates attached to it
            calc_dist(newpost.id)
            flash('New Post created!')
            return redirect(url_for('index'))
    return render_template('create.html', form = tempPost)

#Calculate Distance of user to other posts 
def calc_dist(post_id):
    #Radius of earth in miles
    R = 3958.8
    post = Post.query.get(post_id)

    lat1 = radians(float(post.latitude))
    lon1 = radians(float(post.longitude))
    lat2 = radians(46.7314)
    lon2 = radians(-117.1733)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    #add distance to the db colummn, in order to sort it out
    post.distance = distance
    db.session.commit()
    print("Result:", distance, "Miles")
    
    return render_template('index.html')

#Gets ip address of user and returns json with location information
def ipToLocation():
    #Get Coordinates
    Token_Key ='b69bdc8d2dd7a2c4a172c84dd4f619bf'
    #Ip_Address = remote_addr
    url = 'http://api.ipstack.com/{ip}?access_key={key}'.format(ip= Ip_Address,key= Token_Key)
    headers = {'Content-Type': 'application/json'}
    response = requests.get(url, headers)
    parsed_json = (json.loads(response.text))
    return parsed_json

#Allows user to like posts
@app.route('/yeet/<post_id>', methods=['GET'])
def addLike(post_id):
    post = Post.query.get(post_id)
    post.likes = post.likes +1
    db.session.commit()
    return redirect(url_for('index', post=post))

#Allows users to dislike posts, if a post gets less than 5 likes then it gets deleted
@app.route('/nah/<post_id>', methods=['GET'])
def disLike(post_id):
    post = Post.query.get(post_id)
    post.likes = post.likes -1
    db.session.commit()
    if post.likes < -5:
        db.session.delete(post)
    db.session.commit()
    return redirect(url_for('index', post=post))
  
@app.route('/postcomments/<post_id>', methods=['GET', 'POST'])
def comments(post_id):
    #Original post to stay at the top
    post = Post.query.get(post_id)
    form = ReplyForm()
    if form.validate_on_submit():
        if (form.body.data is not None):
            newreply = Reply(body = form.body.data)
            db.session.add(newreply)
            db.session.commit()
            flash('New Reply created!')
            replys = Reply.query.order_by(Reply.timestamp.desc())

    else: 
        replys = Reply.query.order_by(Reply.timestamp.desc())

    return render_template('comments.html', post= post, form = form, replys = replys.all())
