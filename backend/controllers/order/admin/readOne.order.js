const OrderModel = require('../../../models/order.model');

exports.seeOrder = async (req, res) => {
    try {

        const order = await OrderModel.findByIdAndUpdate(req.params.id, {state:'Preparando Tu Pedido'}, { new: true })
        .populate({path: 'user', select: '-_id name address'})
        .populate({path: 'food', select: '-_id title price'})

        if(!order){
            return res.status(404).json({mensaje: 'No Existe la Orden'})
        }

        res.send(order)

    } catch (err) {
        res.status(500).send(err);
    }
}
 