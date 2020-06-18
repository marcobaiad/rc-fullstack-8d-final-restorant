const FoodsModel = require('../../models/foods.model');

exports.seeDishes =  async (req, res) => {
    try {
        const dishes = await FoodsModel.find({})
        res.send(dishes)
    } catch (err) {
        res.status(500).send(err);
    }
} 
