const mongoose = require('mongoose');
const UsersModel = require('../../models/users.model');

exports.DeleteUser = async (req, res) => {

    try {

        // if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        //     return res.status(404).json({mensaje: 'No hay resultado para la busqueda'});
        // }
        
        const usuario = await UsersModel.findByIdAndDelete(req.params.id)
       
        if (!usuario) res.status(404).send('No hay resultados')

        res.status(200).send({ mensaje: 'Se elimino el Usuario' })
    } catch (err) {
        res.status(500).send(err);
    }
}