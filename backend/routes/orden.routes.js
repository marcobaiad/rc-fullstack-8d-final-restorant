const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreateOrden = require('../controllers/orden/create.orden')
const ControllerReaderOrden = require('../controllers/orden/reader.orden')
const ControllerReadOrden = require('../controllers/orden/read.orden')
const ControllerUpdateOrden = require('../controllers/orden/update.orden')
const ControllerDeleteOrden = require('../controllers/orden/delete.orden')

router.post('/', [  
    
    check('cantidad', 'Cantidad vacia').notEmpty(),
    check('cantidadabonar', 'Cantidad a Abonar Vacio').notEmpty()

],
ControllerCreateOrden.CrearOrden)

router.get('/', ControllerReaderOrden.MostrarOrdenes)

router.get('/:id', ControllerReadOrden.MostrarOrden)

router.put('/:id', ControllerUpdateOrden.ModificarOrden)

router.delete('/:id', ControllerDeleteOrden.EliminarOrden)

module.exports = router;