const mongoose = require('mongoose')
const OrderModel = require('../../models/order.model');

exports.searchOrder = async (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({mensaje: 'No hay resultado para la busqueda'});
    }
    
    const order = await OrderModel.find({user: req.params.id})
    
    try {
        
          res.send(order) 
       
    } catch (err) {
        res.status(500).send(err);
    }
} 