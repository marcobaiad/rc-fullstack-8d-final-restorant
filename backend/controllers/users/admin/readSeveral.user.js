const UsersModel = require('../../../models/users.model');

exports.viewUsers =  async (req, res) => {
    try {
        const users = await UsersModel.find({})
        res.send(users)
    } catch (err) {
        res.status(500).send(err);
    }
}