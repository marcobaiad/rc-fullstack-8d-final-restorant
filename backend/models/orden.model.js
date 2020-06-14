const mongoose = require('mongoose');
const usuario = mongoose.model('usuario')
console.log(usuario)

const OrdenSchema = new mongoose.Schema({
    direccion: {
        type: String,
        trim: true
    },

    cantidad:{
        type: Number,
        trim: true
    },

    cantidadabonar:{
        type: Number,
        trim: true
    },

    usersid: {
        type: Number,
        unique:true,
        trim: true,
    },

    usuario:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'usuario' 
    },

    foodsid: {
        type: Number,
        unique: true,
        trim: true
    }
})

const OrdenModel = mongoose.model('orden', OrdenSchema)

module.exports = OrdenModel;