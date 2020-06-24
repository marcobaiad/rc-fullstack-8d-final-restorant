const OrderModel = require('../../models/order.model');

exports.searchOrder = async (req, res) => {
    console.log('search order...')
    try {
        console.log('entra al try de searchOrder')
        const order = await OrderModel.find({user: res.locals.user.id})

        res.send(order)

    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}