
const sendFeche = require('../modelos/modelSendFecha')

module.exports = {
    disponiblesGet: async (req, res)=>{
 

        try {
            const available = await sendFeche.find();
            res.json(available);
        } catch (error) {
            console.error("Error al obtener los items", error);
            res.status(500).send("Error al obtener los items: " + error.message);
        }
    },

    disponiblesPost: async (req, res) => {
        const {startDate} = req.body;

  try {
    const newFecha = new sendFeche({
        dateTime: new Date(startDate),
        
    })

    await newFecha.save()
    res.status(201).json({ message: 'Cita guardada exitosamente' });

  } catch (error) {
    console.error('Error al guardar la cita:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
    }
}
