const mongoose = require('mongoose');
require('dotenv').config();

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error('Error de conexión a MongoDB:', error));

// Definir un esquema y un modelo
const registroSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const registro = mongoose.model('registro', registroSchema);

module.exports = registro;