const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    
    name:{
        type: String,
        trim: true,
    },

    lastname:{
        type: String,
        trim: true,
    },

    address: {
        type: String,
        trim: true
    },

    age:{
        type: Number,
        trim: true,
    },

    email:{
        type: String,
        trim: true,
        unique: true
    },

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

    orden: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'orden' 
    }],

    token: [String]
})
 
const UsersModel = mongoose.model('usuario', UsersSchema)

module.exports = UsersModel;