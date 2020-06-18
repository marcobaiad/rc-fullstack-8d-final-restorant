const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const FoodsModel = require('../../models/foods.model');
const UsersModel = require('../../models/users.model')


exports.CrearPlato = async (req, res) => {

    const plato = new FoodsModel(req.body);
    const usuario = await UsersModel.findById(req.params.id)
   
    try {
        await plato.save();
        usuario.orden.push(plato)  
        await usuario.save()      
        res.send(plato)
        
        console.log(plato)
    } catch (err) {
        res.status(500).send(err);
    }
}
