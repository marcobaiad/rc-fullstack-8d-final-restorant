const FoodsModel = require('../../../models/foods.model');

exports.seeDishesTrue =  async (req, res) => {
    
    const dishes = await FoodsModel.find({enable: true})
    
    try {
        res.send(dishes)
    } catch (err) {
        res.status(500).send(err);
    }
} 
