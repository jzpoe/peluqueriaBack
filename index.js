
const db = require('./src/db/db');
const express = require('express');
const register = require('./src/register/register.js')
const login = require('./src/login/login');
const app = express();
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
    origin: 'https://peluqueria-riht.vercel.app',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(login);
app.use(register);

const port = process.env.PORT;

app.get('/api', (req, res) => {
    res.send('bienvenido');
});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});