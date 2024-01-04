
const db = require('./src/db/db');
const express = require('express');
const register = require('./src/register/register')
const login = require('./src/login/login');
const app = express();
const cors = require('cors');
require('dotenv').config();


const corsOptions = {
    origin: 'https://peluqueria-riht.vercel.app',

};
  


app.use(express.json());
   
app.use('/sesion', cors(corsOptions));
app.use(login);
app.use('/register', cors(corsOptions));
app.use(register);

const port = process.env.PORT

app.get('/api', (req, res)=>{
    res.send('bienvenido')
} )

app.listen(port, (req, res)=>{
    console.log(`escuchando en el puerto ${port}`);
})