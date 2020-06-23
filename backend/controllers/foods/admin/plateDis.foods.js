const mongoose = require('mongoose');
const FoodsModel = require('../../../models/foods.model');

exports.PlateDis = async (req, res) => {

    try {        
        const plate = await FoodsModel.findByIdAndUpdate(req.params.id, {enable:true}, { new: true })
        res.send(plate)
    } catch (err) {
        res.status(500).send(err);
    }
}