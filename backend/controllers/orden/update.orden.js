const mongoose = require('mongoose');
const OrdenModel = require('../../models/orden.model');

exports.ModificarOrden = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'No hay resultado para la Busqueda'});
        }
        
        const orden = await OrdenModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(orden)
    } catch (err) {
        res.status(500).send(err);
    }
}