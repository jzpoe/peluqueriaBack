
const db = require('./src/db/db');
const express = require('express');
const register = require('./src/register/register')
const login = require('./src/login/login');
const apiroutes = require('./src/route/Routes');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())

app.use(cors({
    origin: ["https://peluqueria-riht.vercel.app"],
    
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

app.use(express.json());
   

app.use(login);
app.use(register);
app.use(apiroutes)

const port = process.env.PORT


app.listen(port, (req, res)=>{
    console.log(`escuchando en el puerto ${port}`);
})

process.on('SIGINT', () => {
    console.log('Aplicación terminada. Cerrando conexión a la base de datos.');
    db.close(); // Asegúrate de tener una referencia a tu conexión a la base de datos (db)
    server.close(() => {
        console.log('Conexión cerrada. Adiós!');
        process.exit(0);
    });
});