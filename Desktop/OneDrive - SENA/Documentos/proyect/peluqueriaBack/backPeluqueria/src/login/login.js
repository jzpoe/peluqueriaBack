const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const registro = require('../db/db');
const { route } = require('../register/register');




router.post('/sesion', async (req, res) => {
    try {
        const {name, email, password} = req.body
        const user = await registro.findOne({email})

        if(!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const comparePass = await bcrypt.compare(password, user.password)

        if(!comparePass){
            res.status(505).json({message:"usuario o contraseña invalidos"})
            return
        }
        res.status(200).json({message: "Bienvenido" })
    } catch (error) {
        console.error('usuario o contraseña invalidos:', error);
    res.status(500).json({ error: 'error al iniciar sesion' });
    }
})

module.exports = router