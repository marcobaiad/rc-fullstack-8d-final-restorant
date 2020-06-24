const FoodsModel = require('../../models/foods.model');

exports.MostrarPlato =  async function (req, res) {
    try {
        const platos = await FoodsModel.findById(req.params).populate('comidas')
        res.send(platos)
        console.log(platos)
    } catch (err) {
        res.status(500).send(err);
    }
}
