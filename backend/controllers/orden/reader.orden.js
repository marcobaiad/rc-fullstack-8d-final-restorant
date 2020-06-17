const mongoose = require('mongoose');
const OrdenModel = require('../../models/orden.model');

exports.MostrarOrdenes =  async(req, res) => {
    try {
        const orden = await OrdenModel.find({})
        .populate({path: 'usuario', select: '-_id name address'})
        .populate({path: 'comida', select: '-_id title price'})
        res.send(orden)
    } catch (err) {
        res.status(500).send(err);
    }
}



