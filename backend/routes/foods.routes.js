const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreatePlate = require('../controllers/foods/admin/create.foods')
const ControllerReadDishesTrue = require('../controllers/foods/user/readSeveralTrue.foods')
const ControllerReadDishesAll = require('../controllers/foods/admin/readSeveralAll.foods')
const ControllerReadPlate = require('../controllers/foods/admin/readOne.foods')
const ControllerUpdatePlate = require('../controllers/foods/admin/update.foods')
const ControllerDeletePlate = require('../controllers/foods/admin/delete.foods')
const ControllerPlateND = require('../controllers/foods/admin/platend.foods')
const ControllerPlateDis = require('../controllers/foods/admin/plateDis.foods')

router.post('/', [  
    
    check('title', 'Campo Titulo esta Vacio').notEmpty(),
    check('summary', 'Campo Resumen esta en Vacio').notEmpty(),
    check('description', 'Campo Descripcion esta en Vacio').notEmpty(),
    check('price', 'Campo Precio Vacio').notEmpty()
    
],
ControllerCreatePlate.CreatePlate)

router.get('/todas', ControllerReadDishesAll.seeDishesAll)
router.get('/:id', ControllerReadPlate.seeDish)
router.get('/', ControllerReadDishesTrue.seeDishesTrue)

router.put('/:id/dis', ControllerPlateDis.PlateDis)
router.put('/:id/nd', ControllerPlateND.PlateND)
router.put('/:id', ControllerUpdatePlate.modifyPlate)

router.delete('/:id', ControllerDeletePlate.removePlate)
module.exports = router;