const mongoose = require('mongoose');
const FoodsModel = require('../../models/foods.model');

exports.PlateND = async (req, res) => {

    try {        
        const plate = await FoodsModel.findByIdAndUpdate(req.params.id, {enable:false}, { new: true })
        res.send(plate)
    } catch (err) {
        res.status(500).send(err);
    }
}
