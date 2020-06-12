const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const OrdenModel = require('../../models/orden.model');

exports.MostrarOrden =  async (req, res) => {
    try {
        const orden = await OrdenModel.find({})
        res.send(orden)
    } catch (err) {
        res.status(500).send(err);
    }
}
