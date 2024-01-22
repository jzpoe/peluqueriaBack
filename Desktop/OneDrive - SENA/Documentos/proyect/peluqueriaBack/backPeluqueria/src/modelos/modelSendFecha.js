

const mongoose = require('mongoose');


const sendFechaSchema = new mongoose.Schema({
    dateTime: {
        type: Date, // Usar 'type' en lugar de 'typeof'
        required: true // Sin comillas alrededor de 'true'
    },
    // hour: {
    //     type: Number,
    //     required: true
    // },
    // minutes: {
    //     type: Number,
    //     required: true
    // }
})

const sendFecha = mongoose.model('sendFecha',sendFechaSchema)


module.exports = sendFecha;