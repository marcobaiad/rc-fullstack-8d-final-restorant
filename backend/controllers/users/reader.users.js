const UsersModel = require('../../models/users.model');

exports.MostrarUsuarios =  async (req, res) => {
    try {
        const usuarios = await UsersModel.find({})
        res.send(usuarios)
    } catch (err) {
        res.status(500).send(err);
    }
}