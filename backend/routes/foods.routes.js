const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreatePlate = require('../controllers/foods/create.foods')
const ControllerReadDishesTrue = require('../controllers/foods/readSeveralTrue.foods')
const ControllerReadDishesAll = require('../controllers/foods/readSeveralAll.foods')
const ControllerReadPlate = require('../controllers/foods/readOne.foods')
const ControllerUpdatePlate = require('../controllers/foods/update.foods')
const ControllerDeletePlate = require('../controllers/foods/delete.foods')
const ControllerPlateND = require('../controllers/foods/platend.foods')


router.post('/:id', [  
    
    check('title', 'Campo Titulo esta Vacio').notEmpty(),
    check('summary', 'Campo Resumen esta en Vacio').notEmpty(),
    check('description', 'Campo Descripcion esta en Vacio').notEmpty(),
    check('price', 'Campo Precio Vacio').notEmpty()
    
],
ControllerCreatePlate.CreatePlate)

router.get('/', ControllerReadDishesTrue.seeDishesTrue)
router.get('/todas', ControllerReadDishesAll.seeDishesAll)
router.get('/:id', ControllerReadPlate.seeDish)
router.put('/:id', ControllerUpdatePlate.modifyPlate)
router.put('/:id/nd', ControllerPlateND.PlateND)
router.delete('/:id', ControllerDeletePlate.removePlate)
module.exports = router;