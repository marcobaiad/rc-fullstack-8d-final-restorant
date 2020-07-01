const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.getOrder =  async(req, res) => {
    console.log('entra al read...')
    try {
    
        const orders = await OrderModel.findById(req.params.id)
        
        res.send(orders)
    } catch (err) {
        res.status(500).send(err);
    }
}
