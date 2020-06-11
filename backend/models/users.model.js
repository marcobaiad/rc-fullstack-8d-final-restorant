const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        trim: true
    },

    token: [String]
})

const UsersModel = mongoose.model('usuario', UsersSchema)

module.exports = UsersModel;