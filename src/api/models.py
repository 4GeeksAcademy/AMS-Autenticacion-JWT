from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Ejemplo de modelo User (puedes ignorar si solo usas users_db en memoria)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)