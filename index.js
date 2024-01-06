
const db = require('./src/db/db');
const express = require('express');
const register = require('./src/register/register.js')
const login = require('./src/login/login');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())

// const corsOptions = {
//     origin: 'peluqueria-riht-k6axvqfej-jzpoe.vercel.app',
//     credentials: true,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
//   };

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     //res.append('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// })
  
//   app.use(cors({
//         origin:["peluqueria-riht-k6axvqfej-jzpoe.vercel.app"]
//   }))
app.use(express.json());
   

app.use(login);
app.use(register);

const port = process.env.PORT

app.get('/api', (req, res)=>{
    res.send('bienvenido')
} )

app.listen(port, (req, res)=>{
    console.log(`escuchando en el puerto ${port}`);
})