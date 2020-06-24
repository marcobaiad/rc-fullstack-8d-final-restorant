const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.sendOrder =  async (req, res) => {
    try {
        const order = await OrderModel.findByIdAndUpdate(req.params.id, {state:'Enviado'}, { new: true })
       
        console.log(order.state)
        res.send(order)   
    } catch (err) {
        res.status(500).send(err);
    }
}


