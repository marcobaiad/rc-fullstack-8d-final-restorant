const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.CreateOrder =  async (req, res) => {
    try {
        const order = new OrderModel(req.body)
        
        await order.save();
        res.send(order)
        
    } catch (err) {
        res.status(500).send(err);
    }
}

