const FoodsModel = require('../../models/foods.model');

exports.MostrarPlatos =  async (req, res) => {
    try {
        const platos = await FoodsModel.find({})
        res.send(platos)
    } catch (err) {
        res.status(500).send(err);
    }
}
