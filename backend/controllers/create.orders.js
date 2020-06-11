const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const OrdersModel = require('../models/orders.model');

exports.CrearPedido = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const pedidos = new OrdersModel(req.body);
    try {
        await pedidos.save();
        res.send(pedidos);
    } catch (err) {
        res.status(500).send(err);
    }
}
