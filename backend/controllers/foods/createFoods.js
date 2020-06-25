const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const FoodsModel = require('../../models/foods.model');

exports.CreateFoods = async (req, res) => {

    const foods = new FoodsModel(req.body);
   
    try {
        await foods.save();
        res.send(foods)
        
        console.log(foods)
    } catch (err) {
        res.status(500).send(err);
    }
}
