const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const OrdenModel = require('../../models/orden.model');

exports.CrearOrden = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const orden = new OrdenModel(req.body);
    try {
        await orden.save();
        res.send({ mensaje: 'orden creada'  })

    } catch (err) {
        res.status(500).send(err);
    }
}
