const UsersModel = require('../../models/users.model');

exports.MostrarUsuario = async (req, res) => {
    try {

        // if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        //     return res.status(404).json({mensaje: 'El ID no Existe'});
        // }

        const usuario = await UsersModel.findById(req.params.id)

        if(!usuario){
            return res.status(404).json({mensaje: 'No Existe el usuario'})
        }

        res.send(usuario)

    } catch (err) {
        res.status(500).send(err);
    }
}
