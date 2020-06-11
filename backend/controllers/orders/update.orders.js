const mongoose = require('mongoose');
const OrdersModel = require('../../models/orders.model');

exports.ModificarPedido = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'El ID no Existe'});
        }
        
        const pedidos = await OrdersModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(pedidos || {})
    } catch (err) {
        res.status(500).send(err);
    }
}
