const mongoose = require('mongoose');
const OrdenModel = require('../../models/orden.model');

exports.EliminarOrden = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la busqueda'});
        }
        
        const orden = await OrdenModel.findByIdAndDelete(req.params.id)
       
        if (!orden) res.status(404).send('No hay resultados')

        res.status(200).send({ mensaje: 'Se elimino la orden' })
    } catch (err) {
        res.status(500).send(err);
    }
}