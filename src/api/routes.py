from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from .models import db
from .utils import APIException

api = Blueprint('api', __name__)

# Diccionario en memoria para usuarios (si no usas base de datos)
users_db = {}

@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"msg": "Faltan datos"}), 400
    if email in users_db:
        return jsonify({"msg": "Usuario ya existe"}), 400
    users_db[email] = password
    return jsonify({"msg": "Usuario creado"}), 201

@api.route('/token', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    if email in users_db and users_db[email] == password:
        token = create_access_token(identity=email)
        return jsonify({"token": token}), 200
    return jsonify({"msg": "Credenciales incorrectas"}), 401