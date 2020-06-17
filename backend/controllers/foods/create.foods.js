const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const FoodsModel = require('../../models/foods.model');
const UsersModel = require('../../models/users.model')
const OrdenModel = require('../../models/orden.model')

exports.CrearPlato = async (req, res) => {

    const plato = new FoodsModel(req.body);
    const usuario = await UsersModel.findById(req.params)
    const orden = new OrdenModel(req.body)
    console.log(usuario)
    try {
        await plato.save();
        orden.usuario.push(usuario)
        orden.comida.push(plato)
        await orden.save()
        res.send(plato)

    } catch (err) {
        res.status(500).send(err);
    }
}
