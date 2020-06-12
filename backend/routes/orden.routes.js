const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreateOrden = require('../controllers/orden/create.orden')
const ControllerReadOrden = require('../controllers/orden/reader.orden')
const ControllerUpdateOrden = require('../controllers/orden/update.orden')
const ControllerDeleteOrden = require('../controllers/orden/delete.orden')

router.post('/', [  
    
    check('direccion', 'Direccion Vacia').notEmpty(),
    check('cantidad', 'Cantidad vacia').notEmpty(),
    check('cantidadabonar', 'Cantidad a Abonar Vacio').notEmpty(),
    check('usersid', 'usersid Vacio').notEmpty(),
    check('foodsid', 'foodsid Vacio').notEmpty()
    
],
ControllerCreateOrden.CrearOrden)

//Traemos todos los Documentos
router.get('/', ControllerReadOrden.MostrarOrden)

//Modificamos el Documento
router.put('/:id', ControllerUpdateOrden.ModificarOrden)

//Borramos el Documento
router.delete('/:id', ControllerDeleteOrden.EliminarOrden)

module.exports = router;