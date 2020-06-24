const express = require('express');
const { check } = require('express-validator')
const authorize = require('../middlewares/authorize')
const router = express.Router();

const ControllerCreatePlate = require('../controllers/foods/createFoods')
const ControllerReadDishesTrue = require('../controllers/foods/readSeveralTrueFoods')
const ControllerReadDishesAll = require('../controllers/foods/readSeveralAllFoods')
const ControllerReadPlate = require('../controllers/foods/readOneFoods')
const ControllerUpdatePlate = require('../controllers/foods/updateFoods')
const ControllerDeletePlate = require('../controllers/foods/deleteFoods')
const ControllerPlateND = require('../controllers/foods/platendFoods')
const ControllerPlateDis = require('../controllers/foods/plateDisFoods')

router.post('/', [  
    
    check('title', 'Campo Titulo esta Vacio').notEmpty(),
    check('summary', 'Campo Resumen esta en Vacio').notEmpty(),
    check('description', 'Campo Descripcion esta en Vacio').notEmpty(),
    check('price', 'Campo Precio Vacio').notEmpty()
    
],
ControllerCreatePlate.CreatePlate)

router.get('/todas', ControllerReadDishesAll.seeDishesAll)
router.get('/:id',authorize('user'), ControllerReadPlate.seeDish)
router.get('/', ControllerReadDishesTrue.seeDishesTrue)

router.put('/:id/dis', ControllerPlateDis.PlateDis)
router.put('/:id/nd', ControllerPlateND.PlateND)
router.put('/:id', ControllerUpdatePlate.modifyPlate)

router.delete('/:id', ControllerDeletePlate.removePlate)
module.exports = router;