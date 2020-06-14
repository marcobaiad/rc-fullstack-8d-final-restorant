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


// const orden = function(req,res){
//     await OrdenModel.find({}), function(err, orden){
//         usuario.populate(orden, {path: 'usuario'}.exec, function(err, orden){
//             res.status(200).send(orden)
//         })
//     }
// } 
