require('dotenv').config(); // Carga las variables de entorno del archivo .env

const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); // <-- NUEVO

const app = express(); 
const PORT = process.env.PORT || 3000; 
const MONGODB_URL = process.env.MONGODB_URL; 

app.use(express.json()); 
app.use(cors({ origin: "http://localhost:5173" })); // <-- NUEVO

// CONEXIÓN CON LA BD
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('Conexión exitosa a MongoDB Atlas');
    })
    .catch(err => {
        console.log('Error de conexión', err.message);
        process.exit(1);
    })

// RUTA DE PRUEBA
app.get('/', (req, res) => {
  res.send('API GameTracker - OK');
});

// RUTAS
const juegoRoutes = require('./routes/juegoRoutes')
app.use('/api/juegos', juegoRoutes)

const resenasRoutes = require('./routes/resenaRoutes')
app.use('/api/resenas', resenasRoutes)

app.listen(PORT, () => {
    console.log(`Servidor Corriendo en http://localhost:${PORT}`)
})
