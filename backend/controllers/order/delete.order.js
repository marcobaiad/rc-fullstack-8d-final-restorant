const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.DeleteOrder = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la busqueda'});
        }
        
        const order = await OrderModel.findByIdAndDelete(req.params.id)
       
        if (!order) res.status(404).send('No hay resultados')

        res.status(200).send({ mensaje: 'Se elimino la orden' })
    } catch (err) {
        res.status(500).send(err);
    }
}