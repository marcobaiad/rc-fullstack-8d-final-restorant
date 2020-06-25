const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');
const { seeOrder } = require('./readOneOrder');

exports.seeOrders =  async(req, res) => {
    console.log('entra al read...')
    try {
    
        const orders = await OrderModel.find({})
        console.log('res.role....', res.locals.user.role)
        console.log('res.user...', res.locals.user)

        res.send(orders)
    } catch (err) {
        res.status(500).send(err);
    }
}
