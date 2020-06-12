const mongoose = require('mongoose');
const FoodsModel = require('../../models/foods.model');

exports.EliminarPlato = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la busqueda'});
        }
        
        const plato = await FoodsModel.findByIdAndDelete(req.params.id)
       
        if (!plato) res.status(404).send('No hay resultados')

        res.status(200).send({ mensaje: 'Se elimino el Plato de la Lista' })
    } catch (err) {
        res.status(500).send(err);
    }
}