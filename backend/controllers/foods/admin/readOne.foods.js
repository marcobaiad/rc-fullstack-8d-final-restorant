const FoodsModel = require('../../../models/foods.model');

exports.seeDish =  async function (req, res) {
    try {
        const plate = await FoodsModel.findById(req.params.id)
        res.send(plate)
        console.log(plate)
    } catch (err) {
        res.status(500).send(err);
    }
}
