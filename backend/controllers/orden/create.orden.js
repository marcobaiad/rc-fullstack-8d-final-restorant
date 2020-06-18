const mongoose = require('mongoose');
const OrdenModel = require('../../models/orden.model');

exports.CrearOrden =  async (req, res) => {
    try {
        const orden = new OrdenModel(req.body)
        
        await orden.save();
        res.send(orden)
        
    } catch (err) {
        res.status(500).send(err);
    }
}

