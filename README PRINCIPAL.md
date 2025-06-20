# Autenticación JWT con Flask y React.js

## Requisitos previos

- Python 3 y pip instalados
- Node.js y npm instalados
- Git instalado

---

## 1. Clona el repositorio

```bash
git clone https://github.com/4GeeksAcademy/react-flask-hello.git
cd react-flask-hello
```

---

## 2. Instala las dependencias del backend

```bash
pip3 install -r requirements.txt
```

---

## 3. Configura la base de datos

Si es la primera vez que ejecutas el proyecto, elimina cualquier base de datos y migraciones previas (opcional en desarrollo):

```bash
rm -f src/database.db
rm -rf migrations
```

Crea las migraciones y la base de datos:

```bash
export FLASK_APP=src/app.py
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

---

## 4. Inicia el backend (Flask)

```bash
python3 src/app.py
```

---

## 5. Instala las dependencias del frontend

```bash
cd src/front
npm install
```

---

## 6. Inicia el frontend (React)

```bash
npm run dev
```

---

## 7. Accede a la aplicación

- **Frontend:** Abre [http://localhost:5173](http://localhost:5173) en tu navegador.
- **Backend:** El API corre por defecto en [http://localhost:3001](http://localhost:3001) o el puerto configurado.

---

## Notas

- Si cambias el puerto del backend, actualiza la variable `VITE_API_URL` en el frontend.
- Para desarrollo, puedes borrar la base de datos y migraciones si necesitas reiniciar el estado.

---

¡Listo!  
Con estos pasos tu proyecto Flask + React debería funcionar correctamente.