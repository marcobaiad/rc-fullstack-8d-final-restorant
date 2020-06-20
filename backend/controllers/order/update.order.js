const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.modifyOrder = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la Busqueda'});
        }
        
        const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(order) 
    } catch (err) {
        res.status(500).send(err);
    }
}