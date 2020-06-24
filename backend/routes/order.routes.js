const express = require('express');
const { check } = require('express-validator')
const authorize = require('../middlewares/authorize')
const router = express.Router();

const ControllerCreateOrder = require('../controllers/order/createOrder')
const ControllerReadSeveralOrders = require('../controllers/order/readSeveralOrder')
const ControllerReadOneOrder = require('../controllers/order/readOneOrder')
const ControllerUpdateOrder = require('../controllers/order/updateOrder')
const ControllerDeleteOrder = require('../controllers/order/deleteOrder')
const ControllerSendOrder = require('../controllers/order/sendOrder')
const ControllerCancelOrder = require('../controllers/order/cancelOrder')
const ControllerSearchOrderUser = require('../controllers/order/searchOrderUser')

router.post('/', [  
     
    check('quantity', 'Cantidad vacia').notEmpty(),
    check('amountTopay', 'Cantidad a Abonar Vacio').notEmpty()

],

ControllerCreateOrder.CreateOrder)

router.get('/:id',authorize('user'), ControllerSearchOrderUser.searchOrder)
router.get('/:id', ControllerReadOneOrder.seeOrder)
router.get('/', ControllerReadSeveralOrders.seeOrders)

router.put('/:id/cancelar', ControllerCancelOrder.cancelOrder) 
router.put('/:id/enviar', ControllerSendOrder.sendOrder)
router.put('/:id', ControllerUpdateOrder.modifyOrder)

router.delete('/:id', ControllerDeleteOrder.DeleteOrder)

module.exports = router;