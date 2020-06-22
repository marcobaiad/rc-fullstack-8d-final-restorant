const jsonwebtoken = require('jsonwebtoken');
const UsersModel = require('../models/users.model');

module.exports = async(req, res, next) =>{

    try {
        console.log('entra al try de authorize')
        const token = req.header('authorization').replace('Bearer ', '');

        const verificar = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        const userLogin = await UsersModel.findOne({ _id: verificar.user.id, token: token });
        console.log('user',userLogin)
        if(!userLogin){
            return res.status(401).json({ mensaje: 'Dentro: No Autorizado' })
        }

        res.locals.user = userLogin;
        res.locals.token = token;
        
        next();
    }
        
     catch (error) {
         console.log(error);
         return res.status(401).json({ mensaje: 'Fuera: No Autorizado', error: error.mensaje})
     }    
}
