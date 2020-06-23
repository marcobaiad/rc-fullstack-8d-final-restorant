const FoodsModel = require('../../../models/foods.model');

exports.seeDishesAll =  async (req, res) => {
    
    const dishes = await FoodsModel.find({})
    
    try {
        res.send(dishes)
    } catch (err) {
        res.status(500).send(err);
    }
} 
