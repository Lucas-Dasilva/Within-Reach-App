from __future__ import print_function
import sys
from datetime import datetime
from flask import render_template, flash, redirect, url_for, request
from flask_sqlalchemy import sqlalchemy

from app import app, db

from app.forms import PostForm, SortForm, RegistrationForm, LoginForm
from app.models import Post, postTags, Tag, User
from flask_login import current_user, login_user, logout_user, login_required


@app.before_first_request
def initDB(*args, **kwargs):
    db.create_all()
    if Tag.query.count() == 0:
        tags = ['funny','inspiring', 'true-story', 'heartwarming', 'friendship']
        for t in tags:
            db.session.add(Tag(name=t))
        db.session.commit()

@app.route('/postsmile', methods=['GET', 'POST'])
@login_required
def postsmile():
    tempPost = PostForm()
    if tempPost.validate_on_submit():
        if (tempPost.title.data is not None) and (tempPost.body.data is not None):
            newpost = Post(title = tempPost.title.data, body = tempPost.body.data, happiness_level = tempPost.happiness_level.data, user_id = current_user.id)
            for tag in tempPost.tag.data:
                newpost.tags.append(tag)
            db.session.add(newpost)
            db.session.commit()
            flash('New smile created!')
            return redirect(url_for('index'))
    return render_template('create.html', form = tempPost)

@app.route('/like/<post_id>', methods=['GET'])
@login_required
def numLikes(post_id):
    likeCount = Post.query.get(post_id)
    likeCount.likes += 1
    db.session.add(likeCount)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
@login_required
def index():
    sortForm = SortForm()
    if request.method == 'POST':
        check = sortForm.checkbox.data
        if check:
            posts = Post.query.filter_by(user_id = current_user.id)
        else:
            posts = Post.query
        option = int(sortForm.choices.data)
        if option == 1:
            posts = posts.order_by(Post.happiness_level.desc())
        elif option == 2:
            posts = posts.order_by(Post.likes.desc())
        elif option == 3:
            posts = posts.order_by(Post.title)
        else:
            posts = posts.order_by(Post.timestamp.desc())
    else: 
        posts = Post.query.order_by(Post.timestamp.desc())
    return render_template('index.html', title="Smile Portal", posts=posts.all(), smilecount =  posts.count(), sortForm = sortForm)


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Registered!')
        return redirect(url_for('index'))
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.get_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        return redirect(url_for('index'))
    return render_template('login.html', title='Sign In', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/delete/<post_id>', methods=['POST', 'DELETE'])
@login_required
def delete(post_id):
    thepost = Post.query.get(post_id)
    for t in thepost.tags:
        thepost.tags.remove(t)
    db.session.commit()
    db.session.delete(thepost)
    flash('Post deleted.')
    db.session.commit()
    return redirect(url_for('index', thepost = thepost))