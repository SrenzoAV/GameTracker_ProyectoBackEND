<h1 align="center">🖥️ GameTracker – Backend</h1>

<p align="center">
  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/96/external-server-web-hosting-flaticons-lineal-color-flat-icons.png" width="90" />
</p>

<p align="center">
  <strong>API REST creada con Node.js + Express + MongoDB</strong>
</p>

<hr>

<h2>📌 Descripción</h2>
<p>
  Este es el backend oficial de <strong>GameTracker</strong>, encargado de gestionar datos de videojuegos y reseñas.
  Expone una API REST organizada, segura y escalable para servir al frontend del proyecto.
</p>

<hr>

<h2>📦 Funcionalidades</h2>
<ul>
  <li>📘 CRUD completo de videojuegos</li>
  <li>⭐ CRUD completo de reseñas por juego</li>
  <li>🗄️ Base de datos en MongoDB con Mongoose</li>
  <li>🔐 Validación de datos</li>
  <li>🌐 Rutas separadas y organizadas</li>
</ul>

<hr>

<h2>🛠️ Tecnologías usadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>MongoDB + Mongoose</li>
  <li>CORS</li>
  <li>Nodemon para desarrollo</li>
</ul>

<hr>

<h2>📂 Estructura del proyecto</h2>
<pre>
GameTracker-Backend/
│── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
│── package.json
│── .env.example
</pre>

<hr>

<h2>⚙️ Configuración</h2>

<h3>1️⃣ Clonar repositorio</h3>
<pre>git clone</pre>

<h3>2️⃣ Instalar dependencias</h3>
<pre>npm install</pre>

<h3>3️⃣ Ejecutar servidor</h3>
<pre>npm run dev</pre>

<hr>

<h2>📡 Endpoints principales</h2>

<h3>🎮 Juegos</h3>
<pre>
GET     /api/juegos
GET     /api/juegos/:id
POST    /api/juegos
PUT     /api/juegos/:id
DELETE  /api/juegos/:id
</pre>

<h3>⭐ Reseñas</h3>
<pre>
GET     /api/resenas?juegoId=ID
POST    /api/resenas
PUT     /api/resenas/:id
DELETE  /api/resenas/:id
</pre>

<hr>

<h2>👨‍💻 Autores</h2>
<ul>
  <li>Sebastián</li>
  <li>Santiago</li>
</ul>

<hr>

<h2>✨ Agradecimiento especial</h2>
<p>
  Este backend forma parte del proyecto académico de <strong>Jóvenes Creativos</strong>.  
  Gracias por el apoyo, la guía y la inspiración para construir algo con propósito.
</p>
