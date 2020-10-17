from app import app,db
from app.models import Post
from app.routes import getIpLocation
@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Post': Post}
    
#getIpLocation('b69bdc8d2dd7a2c4a172c84dd4f619bf')
#if __name__ == '__main__':
 #   app.run(debug=True)