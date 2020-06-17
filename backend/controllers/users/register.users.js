const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const UsersModel = require('../../models/users.model')

exports.registerUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const { body } = req

    let name = ({ name: body.name })
    
    let lastname = ({ lastname: body.lastname })

    let address = ({address: body.address})
   
    let email = ({ email: body.email })
   
    let edad = ({ age: body.age });
  
    if (edad.age < 18) {
        return res.status(400).json({ mensaje: 'no podes tener cuenta' })
    }

    let usuarioExiste = await UsersModel.findOne({ username: body.username });
    if (usuarioExiste) {
        console.log(usuarioExiste)
        return res.status(400).json({ mensaje: 'El Usuario ya existe' })
    }

    const user = {
        name: body.name,
        lastname: body.lastname,
        address: body.address,
        age: body.age,
        email: body.email,
        username: body.username,
        tokens: []
    };

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(body.password, salt);

    const usuario = new UsersModel(user);
    console.log(usuario)
    try {
        await usuario.save();
        res.send({ mensaje: 'Tu Usuario se Registro Correctamente' })
    } catch (error) {
        res.status(500).send(error);
    }
}