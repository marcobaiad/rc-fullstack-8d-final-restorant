const mongoose = require('mongoose');
const FoodsModel = require('../../models/foods.model');

exports.RemoveFoods = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la busqueda'});
        }
        
        const foods = await FoodsModel.findByIdAndDelete(req.params.id)
       
        if (!foods) res.status(404).send('No hay resultados')

        res.status(200).send({ mensaje: 'Se elimino de la Lista' })
    } catch (err) {
        res.status(500).send(err);
    }
}