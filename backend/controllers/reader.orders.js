const mongoose = require('mongoose');
const OrdersModel = require('../models/orders.model');

exports.MostrarPedidos =  async (req, res) => {
    try {
        const pedidos = await OrdersModel.find({})
        res.send(pedidos)
    } catch (err) {
        res.status(500).send(err);
    }
}
