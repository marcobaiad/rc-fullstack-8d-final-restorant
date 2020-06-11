const express = require('express');
const { check } = require('express-validator')
const autorizado = require('../middlewares/autorizar')
const router = express.Router(); 

const usuarioControllerRegister = require('../controllers/users/register.users')
const usuarioControllerLogin = require('../controllers/users/login.users')
const usuarioControllerLogout = require('../controllers/users/logout.users')

router.post('/', [
    check('username', 'Campo Vacio. Usuario').notEmpty(),
    check('password', ' Campo Vacio. Contraseña').notEmpty(),
    check('password', 'la contraseña debe tener un minimo de 8 caracteres').isLength({ min: 8 }),
], usuarioControllerRegister.createUser)
router.post('/login', [
    check('username', 'usuarioError: Campo Vacio.').notEmpty(),
    check('password', 'contraseñaError: Campo Vacio').notEmpty(),
], usuarioControllerLogin.loginUser)
router.get('/logout',autorizado, usuarioControllerLogout.logoutUser)

module.exports = router;
