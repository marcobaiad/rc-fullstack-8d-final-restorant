const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const FoodsModel = require('../../../models/foods.model');

exports.CreatePlate = async (req, res) => {

    const plate = new FoodsModel(req.body);
   
    try {
        await plate.save();
        res.send(plate)
        
        console.log(plate)
    } catch (err) {
        res.status(500).send(err);
    }
}
