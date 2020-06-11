const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        unique: true
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

const OrdersModel = mongoose.model('pedido', OrdersSchema)

module.exports = OrdersModel;