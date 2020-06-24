const mongoose = require('mongoose');
const FoodsModel = require('../../models/foods.model');

exports.ModificarPlato = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la Busqueda'});
        }
        
        const plato = await FoodsModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(plato)
    } catch (err) {
        res.status(500).send(err);
    }
}
