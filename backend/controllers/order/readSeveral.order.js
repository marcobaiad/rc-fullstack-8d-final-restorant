const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.seeOrders =  async(req, res) => {
    try {
        const orders = await OrderModel.find({})
        
        res.send(orders)
    } catch (err) {
        res.status(500).send(err);
    }
}



