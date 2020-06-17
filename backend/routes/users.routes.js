const express = require('express');
const { check } = require('express-validator')
const autorizado = require('../middlewares/autorizar')
const router = express.Router();

const usuarioControllerRegister = require('../controllers/users/register.users')
const usuarioControllerLogin = require('../controllers/users/login.users')
const usuarioControllerLogout = require('../controllers/users/logout.users')
const usuariosControllerReader = require('../controllers/users/reader.users')
const usuarioControllerRead = require('../controllers/users/read.users')
const usuarioControllerDelete = require('../controllers/users/delete.users')

router.post('/', [
    check('name', 'Campo Nombre Vacio').notEmpty(),
    check('lastname', 'Campo Apellido Vacio').notEmpty(),
    check('address', 'Ingresar un Mail Correcto').notEmpty(),
    check('age', 'Campo Edad Vacio').notEmpty(),
    check('email', 'Campo Mail Vacio').notEmpty(),
    check('email', 'Ingresar un Mail Correcto').isEmail(),
    check('username', 'Campo Vacio. Usuario').notEmpty(),
    check('password', ' Campo Vacio. Contraseña').notEmpty(),
    check('password', 'la contraseña debe tener un minimo de 8 caracteres').isLength({ min: 8 }),
], usuarioControllerRegister.registerUser)
router.post('/login', [
    check('username', 'usuarioError: Campo Vacio.').notEmpty(),
    check('password', 'contraseñaError: Campo Vacio').notEmpty(),
], usuarioControllerLogin.loginUser)
router.get('/logout', autorizado, usuarioControllerLogout.logoutUser)
router.get('/', usuariosControllerReader.MostrarUsuarios)
router.get('/:id', usuarioControllerRead.MostrarUsuario)
router.delete('/:id', usuarioControllerDelete.DeleteUser)

module.exports = router;
