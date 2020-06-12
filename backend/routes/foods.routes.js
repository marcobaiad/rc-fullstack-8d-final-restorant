const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreatePlato = require('../controllers/foods/create.foods')
const ControllerReadPlatos = require('../controllers/foods/reader.foods')
const ControllerUpdatePlato = require('../controllers/foods/update.foods')
const ControllerDeletePlato = require('../controllers/foods/delete.foods')

router.post('/', [  
    
    check('title', 'Campo Titulo esta Vacio').notEmpty(),
    check('summary', 'Campo Resumen esta en Vacio').notEmpty(),
    check('description', 'Campo Descripcion esta en Vacio').notEmpty(),
    check('price', 'Campo Precio Vacio').notEmpty()
    
],
ControllerCreatePlato.CrearPlato)

//Traemos todos los Documentos
router.get('/', ControllerReadPlatos.MostrarPlatos)

//Modificamos el Documento
router.put('/:id', ControllerUpdatePlato.ModificarPlato)

//Borramos el Documento
router.delete('/:id', ControllerDeletePlato.EliminarPlato)

module.exports = router;