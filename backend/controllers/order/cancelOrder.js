const mongoose = require('mongoose');
const OrderModel = require('../../models/order.model');

exports.cancelOrder =  async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ mensaje: 'No hay resultado para la busqueda' });
    }
    const order = await OrderModel.findById(req.params.id)
        
    try {
            if(order.state === 'Cancelado' || order.state === 'Finalizado'){
                return res.send({mensaje: 'ERR: Verificar el estado de la Orden.'})
            }else{
                order.state = 'Cancelado'
                await order.save();
                res.send(order)
            }
     

    } catch (err) {
        res.status(500).send(err);
    }
}
