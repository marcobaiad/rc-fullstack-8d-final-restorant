const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.CreateOrder =  async (req, res) => {

    const order = new OrderModel(req.body)
    
    try {
        if(req.body.address){
            await order.save();
            res.send(order)
        }else{            
            order.address = res.locals.user.address;
            await order.save();
            res.send(order)
        } 
        
    } catch (err) {
        res.status(500).send(err);
    }
}

