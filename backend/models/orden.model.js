const mongoose = require('mongoose');

const OrdenSchema = new mongoose.Schema({
  
    cantidad:{
        type: Number,
        trim: true
    },

    cantidadabonar:{
        type: Number,
        trim: true
    },

    usuario: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'usuario' 
    }],

    comida: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'comida' 
    }]
})

const OrdenModel = mongoose.model('orden', OrdenSchema)

module.exports = OrdenModel;