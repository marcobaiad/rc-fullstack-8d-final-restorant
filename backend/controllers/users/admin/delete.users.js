const mongoose = require('mongoose');
const UsersModel = require('../../../models/users.model');

exports.DeleteUser = async (req, res) => {

    try {
        
        const user = await UsersModel.findByIdAndDelete(req.params.id)
       
        if (!user) res.status(404).send('No hay resultados')

        res.status(200).send({ mensaje: 'Se elimino el Usuario' })
    } catch (err) {
        res.status(500).send(err);
    }
}