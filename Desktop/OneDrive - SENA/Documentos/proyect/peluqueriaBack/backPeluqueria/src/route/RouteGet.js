const express = require('express');
const router = express.Router();
const sendFeche = require('../modelos/modelSendFecha')


router.get('/availableHors', async (req, res)=>{
 

    try {
        const available = await sendFeche.find();
        res.json(available) 
    } catch (error) {
        console.error("error al obtener los items", error)
        res.status(500).send("error al obtener los items")
    }
} )

module.exports = router