const UsersModel = require('../../../models/users.model');

exports.viewUser = async (req, res) => {
    try {

        const user = await UsersModel.findById(req.params.id)

        if(!user){
            return res.status(404).json({mensaje: 'No Existe el usuario'})
        }

        res.send(user)

    } catch (err) {
        res.status(500).send(err);
    }
}
