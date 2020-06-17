const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const OrdenModel = require('../../models/orden.model');

exports.CrearOrden = async (req, res) => {

    const orden = new OrdenModel(req.body);
    try {
        await orden.save();
        res.send({ mensaje: 'orden creada'  })

    } catch (err) {
        res.status(500).send(err);
    }
}
