const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const OrdenModel = require('../../models/orden.model');

exports.MostrarOrden =  (req, res) => {
    try {
        const orden = OrdenModel.findOne({}).populate({path: 'usuario', model: 'orden'}).exec(function(err, usuarios){
            if(!err){
                console.log('el usuario es ', usuarios.usuario)
            }
        })
        res.send(orden)
    } catch (err) {
        res.status(500).send(err);
    }
}



