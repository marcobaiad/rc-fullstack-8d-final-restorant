const mongoose = require('mongoose')


const FoodsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        unique: true
    },

    summary:{
        type: String,
        required: true,
        trim: true
    },

    description:{
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required:true,
        trim: true
    }
})

const FoodsModel = mongoose.model('comida', FoodsSchema)

module.exports = FoodsModel;