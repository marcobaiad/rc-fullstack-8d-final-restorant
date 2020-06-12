const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const FoodsModel = require('../../models/foods.model');

exports.CrearPlato = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
      
    }

    const plato = new FoodsModel(req.body);
    try {
        await plato.save();
        res.send({ mensaje: 'Tu Pedido ya se Tomo'  })

    } catch (err) {
        res.status(500).send(err);
    }
}
