from flask import Flask, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
from flask_jwt_extended import JWTManager
from datetime import timedelta
from dotenv import load_dotenv
import os

from table.db import db, User  # Import db and User from db.py
from auth.auth import auth  # Import the auth blueprint

load_dotenv()

main = Flask(__name__)

CORS(main, resources={r"/*": {"origins": "http://localhost:3000"}})

# Configure the app
main.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
main.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
main.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

# Initialize the database and JWT
db.init_app(main)
jwt = JWTManager(main)

#refister blueprint
main.register_blueprint(auth)


with main.app_context():
    db.create_all()

# Create a test route 
@main.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'The server is running'})

# Start the server
if __name__ == "__main__":
    main.run(debug=True)