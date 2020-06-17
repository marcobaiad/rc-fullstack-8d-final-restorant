const mongoose = require('mongoose');
const { validationResult } = require('express-validator')
const OrdenModel = require('../../models/orden.model');

exports.CrearOrden = async (req, res) => {
    try {

        // if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        //     return res.status(404).json({mensaje: 'El ID no Existe'});
        // }
        const orden = await OrdenModel.findById(req.params.id)
        .populate({path: 'usuario', select: '-_id name address'})
        .populate({path: 'comida', select: '-_id title price'})

        await orden.save();
        res.send(orden)

    } catch (err) {
        res.status(500).send(err);
    }
}

