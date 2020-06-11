const express = require('express');
const { check } = require('express-validator')
const router = express.Router();


//se trae el controlador del pedidos
const pedidosControllerCreate = require('../controllers/create.orders')
const pedidosControllerRead = require('../controllers/reader.orders')
const pedidosControllerUpdate = require('../controllers/update.orders')
const pedidosControllerDelete = require('../controllers/delete.orders')

//A partir del Modelo -> creamos el documento
router.post('/', [  
    
    check('name', 'Campo Nombre Menu esta Vacio').notEmpty(),
    check('description', 'Campo Descripcion esta en Vacio').notEmpty(),
    check('price', 'Campo Precio Vacio').notEmpty()
    
],
    pedidosControllerCreate.CrearPedido)

//Traemos todos los Documentos
router.get('/', pedidosControllerRead.MostrarPedidos)

//Modificamos el Documento
router.put('/:id', pedidosControllerUpdate.ModificarPedido)

//Borramos el Documento
router.delete('/:id', pedidosControllerDelete.EliminarPedido)

module.exports = router;