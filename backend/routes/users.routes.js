const express = require('express');
const { check } = require('express-validator')
const authorize = require('../middlewares/authorize')
const router = express.Router();
 
const usuarioControllerRegister = require('../controllers/users/user/register.users')
const usuarioControllerLogin = require('../controllers/users/user/login.users')
const usuarioControllerLogout = require('../controllers/users/user/logout.users')
const usuariosControllerReadSeveral = require('../controllers/users/admin/readSeveral.user')
const usuarioControllerReadOne = require('../controllers/users/admin/readOne.user')
const usuarioControllerDelete = require('../controllers/users/admin/delete.users')

router.post('/login', [
    check('username', 'usuarioError: Campo Vacio.').notEmpty(),
    check('password', 'contraseñaError: Campo Vacio').notEmpty(),
], usuarioControllerLogin.loginUser)
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

router.get('/logout', authorize, usuarioControllerLogout.logoutUser)
router.get('/:id', usuarioControllerReadOne.viewUser)
router.get('/', usuariosControllerReadSeveral.viewUsers) 

router.delete('/:id', usuarioControllerDelete.DeleteUser)

module.exports = router;
