const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const FoodsModel = require('../../models/foods.model');
const UsersModel = require('../../models/users.model')


exports.CreatePlate = async (req, res) => {

    const plate = new FoodsModel(req.body);
    const user = await UsersModel.findById(req.params.id)
   
    try {
        await plate.save();
        user.order.push(plate)  
        await user.save()      
        res.send(plate)
        
        console.log(plate)
    } catch (err) {
        res.status(500).send(err);
    }
}
