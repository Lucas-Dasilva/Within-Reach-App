"""
Resources:
    https://flask.palletsprojects.com/en/1.1.x/testing/ 
    https://www.patricksoftwareblog.com/testing-a-flask-application-using-pytest/ 
"""
# pytest -v app/tests/test_routes.py

import os
import tempfile
import pytest
from config import basedir
from app import app,db,login
from app.models import Post, Reply, User, reactedPost, reactedReply


@pytest.fixture(scope='module')
def test_client(request):
    #re-configure the app for tests
    app.config.update(
        SECRET_KEY = 'bad-bad-key',
        SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'test.db'),
        SQLALCHEMY_TRACK_MODIFICATIONS = False,
        WTF_CSRF_ENABLED = False,
        DEBUG = True,
        TESTING = True,
    )
    db.init_app(app)
    # Flask provides a way to test your application by exposing the Werkzeug test Client
    # and handling the context locals for you.
    testing_client = app.test_client()
 
    # Establish an application context before running the tests.
    ctx = app.app_context()
    ctx.push()
 
    yield  testing_client 
    # this is where the testing happens!
 
    ctx.pop()

@pytest.fixture
def new_user():
    user = User(id = 1, username='arnold',
                    latitude = '47.65', longitude = '-120.48', karma = 100)
    user.set_password('123')
    return user

@pytest.fixture
def init_database(request,test_client):
    # Create the database and the database table
    db.create_all()
    user1 = User(id = 1, username='arnold',
                    latitude = '47.65', longitude = '-120.48', karma = 100)
    user1.set_password('123')
    # Insert user data
    db.session.add(user1)
    # Commit the changes for the users
    db.session.commit()
    yield  # this is where the testing happens!
    db.drop_all()

def test_register_page(request,test_client):
    # Create a test client using the Flask application configured for testing
    response = test_client.get('/register')
    assert response.status_code == 200
    assert b"Register" in response.data

def test_register(request,test_client,init_database):
    # Create a test client using the Flask application configured for testing
    response = test_client.post('/register', 
                          data=dict(username='robert',
                            password = "test_password", password2 = "test_password"),
                          follow_redirects = True)
    assert response.status_code == 200

    s = db.session.query(User).filter(User.username == 'robert')
    assert s.first().username == 'robert'
    assert s.count() == 1
    assert b"Upon logging in, you agree to share your approximate Location with us" in response.data
    assert b"Sign In" in response.data

def test_invalidlogin(request,test_client,init_database):
    response = test_client.post('/login', 
                          data=dict(username='arnold', password='12345',remember_me='false'),
                          follow_redirects = True)
    assert response.status_code == 200
    assert b"Invalid username or password" in response.data


def test_login_logout(request,test_client,init_database):
    response = test_client.post('/login', 
                          data=dict(username='arnold', password='123', remember_me = 'false'),
                          follow_redirects = True)
    assert response.status_code == 200
    assert b"Logged In" in response.data

    response = test_client.get('/logout',                       
                          follow_redirects = True)
    assert response.status_code == 200
    assert b"Sign In" in response.data

# def test_createpost(request,test_client,init_database):
#     #first login
#     # response = test_client.post('/login', 
#     #                       data=dict(username='arnold', password='123', remember_me = 'false'),
#     #                       follow_redirects = True)
#     # assert response.status_code == 200
#     # assert b"Logged in" in response.data
    
#     #test the "create post" form 
#     response = test_client.get('/createpost')
#     assert response.status_code == 200
#     assert b"Create a New Post" in response.data
    
#     #test posting a post
#     response = test_client.post('/createpost', 
#                           data=dict(body = 'testpost', latitude = '47.65',
#                             longitude = '-120.48', user_id = 1),
#                           follow_redirects = True)
#     assert response.status_code == 200
#     assert b"Post Created" in response.data
#     c = db.session.query(Post).filter(Post.user_id == 1)
#     assert c.first().body == 'testpost'
#     assert c.count() == 1

#     #finally logout
#     response = test_client.get('/logout',                       
#                           follow_redirects = True)
#     assert response.status_code == 200
#     assert b"Sign In" in response.data


# def test_vote(request,test_client,init_database):
#     #first login
#     response = test_client.post('/login', 
#                           data=dict(username='arnold', password='123', remember_me = 'false'),
#                           follow_redirects = True)
#     assert response.status_code == 200
#     assert b"Logged in" in response.data
    
#     # create a post
#     response = test_client.post('/createpost', 
#                           data=dict(body = 'testpost', latitude = '47.65',
#                             longitude = '-120.48', user_id = 1),
#                           follow_redirects = True)
#     assert response.status_code == 200
#     assert b"Post Created" in response.data
#     c = db.session.query(Post).filter(Post.user_id == 1)
#     assert c.first().body == 'testpost'
#     assert c.count() == 1

#     # like the post
#     response = test_client.post('/postLike/'+str(c.first().id), 
#                         data=dict(),
#                         follow_redirects = True)
#     assert response.status_code == 200
#     assert b"You are now enrolled in class CptS 355!" in response.data
#     c = db.session.query(Class).filter(Class.coursenum =='355' and Class.major == 'CptS')
#     assert c.first().roster[0].username == 'sakire'

#     # finally logout
#     response = test_client.get('/logout',                       
#                           follow_redirects = True)
#     assert response.status_code == 200
#     assert b"Sign In" in response.data
#     assert b"Please log in to access this page." in response.data   
