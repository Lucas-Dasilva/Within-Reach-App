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
    session.permanent = True
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
    postCount = Post.query.count()
    sortForm = SortForm()
    if 'latitude' in session:
        for p in Post.query.all():
            if str(p.id) not in session:
                calc_dist(p.id)
    #Checks if location has already been received
    if 'latitude' not in session:
        return render_template('location.html', title="Welcome to Within Reach")
        
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
    return render_template('index.html', title="Welcome to Within Reach", posts= posts, postCount =  posts.count(), sortform = sortForm)


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

    #Initializing dictionary with Tuple. 
    #Dict Key has value of (distance from post, if post is upVoted, downVoted, or None)
    session[str(post_id)] = [distance, None]
    
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
            postCount = Post.query.count()            
            flash('New Post created!')
            return redirect(url_for('index'))
    return render_template('create.html', form = tempPost)


#Allows user to like posts
@app.route('/postLike/<post_id>', methods=['GET'])
def upVote(post_id):
    post = Post.query.get(post_id)
    #Must convert tuple back into list inorder to access it
    #if someone trys to upvote and hasnt upvoted yet
    if session[str(post_id)][1] == None:
        post.likes = post.likes + 1
        session[str(post_id)][1]= "upVoted"
    #If someone trys to upvote, but already has been upvoted
    elif session[str(post_id)][1] == "upVoted":
        post.likes = post.likes -1
        session[str(post_id)][1] = None
    #If someone trys to upvoted, but post is already downVoted
    elif session[str(post_id)][1] == "downVoted":
        post.likes = post.likes +2
        session[str(post_id)][1] = "upVoted"
    db.session.commit()
    session.modified =  True
    return redirect(url_for('index', post=post))

#Allows users to dislike posts, if a post gets less than 5 likes then it gets deleted
@app.route('/postDislike/<post_id>', methods=['GET'])
def downVote(post_id):
    post = Post.query.get(post_id)
    #Must convert tuple back into list inorder to access it
    #if someone trys to upvote and hasnt upvoted yet
    if session[str(post_id)][1] == None:
        post.likes = post.likes - 1
        session[str(post_id)][1]= "downVoted"
    #If someone trys to upvote, but already has been upvoted
    elif session[str(post_id)][1] == "downVoted":
        post.likes = post.likes +1
        session[str(post_id)][1] = None
    #If someone trys to upvoted, but post is already downVoted
    elif session[str(post_id)][1] == "upVoted":
        post.likes = post.likes -2
        session[str(post_id)][1] = "downVoted"
    db.session.commit()
    session.modified =  True
    return redirect(url_for('index', post=post))
  
@app.route('/postcomments/<post_id>', methods=['GET', 'POST'])
def comments(post_id):
    #Original post to stay at the top
    post = Post.query.get(post_id)
    #Check if there any replies to the post
    if post.replies:
        for reply in post.replies:
            if "r"+ str(reply.id) not in session:
                session["r"+ str(reply.id)] = None
            
    form = ReplyForm()
    if form.validate_on_submit():
        if (form.body.data is not None):
            newreply = Reply(body = form.body.data, post = post_id)
            db.session.add(newreply)
            db.session.commit()
            flash('New Reply created!')
            session["r"+ str(newreply.id)] = None
            replys = Reply.query.order_by(Reply.timestamp.desc())

    else: 
        replys = Reply.query.order_by(Reply.timestamp.desc())

    return render_template('comments.html', post= post, form = form, replys = replys.filter(post_id == Reply.post))

#Allows user to like posts
@app.route('/replyUp/<reply_id>', methods=['GET'])
def upVoteReply(reply_id):
    post = Post.query.get(reply_id)
    #Must convert tuple back into list inorder to access it
    #if someone trys to upvote and hasnt upvoted yet
    if session[str(reply_id)][1] == None:
        post.likes = post.likes + 1
        session[str(reply_id)][1]= "upVoted"
    #If someone trys to upvote, but already has been upvoted
    elif session[str(reply_id)][1] == "upVoted":
        post.likes = post.likes -1
        session[str(reply_id)][1] = None
    #If someone trys to upvoted, but post is already downVoted
    elif session[str(reply_id)][1] == "downVoted":
        post.likes = post.likes +2
        session[str(post_id)][1] = "upVoted"
    db.session.commit()
    session.modified =  True
    return redirect(url_for('comments', post_id=post.post))

#Allows users to dislike replys, if a reply gets less than 5 likes then it gets deleted
@app.route('/replyDown/<reply_id>', methods=['GET'])
def downVoteReply(reply_id):
    post = Post.query.get(reply_id)
    #Must convert tuple back into list inorder to access it
    #if someone trys to upvote and hasnt upvoted yet
    if session[str(reply_id)][1] == None:
        post.likes = post.likes - 1
        session[str(reply_id)][1]= "downVoted"
    #If someone trys to upvote, but already has been upvoted
    elif session[str(reply_id)][1] == "downVoted":
        post.likes = post.likes +1
        session[str(reply_id)][1] = None
    #If someone trys to upvoted, but post is already downVoted
    elif session[str(reply_id)][1] == "upVoted":
        post.likes = post.likes -2
        session[str(reply_id)][1] = "downVoted"
    db.session.commit()
    session.modified =  True
    return redirect(url_for('index', post=post.post))
