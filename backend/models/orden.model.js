const mongoose = require('mongoose')

const OrdenSchema = new mongoose.Schema({
    direccion: {
        type: String,
        trim: true,
        unique: true
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
        trim: true
    },

    foodsid: {
        type: Number,
        unique: true,
        trim: true
    }
})

const OrdenModel = mongoose.model('orden', OrdenSchema)

module.exports = OrdenModel;