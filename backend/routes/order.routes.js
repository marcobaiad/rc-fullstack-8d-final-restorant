const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreateOrder = require('../controllers/order/create.order')
const ControllerReadSeveralOrders = require('../controllers/order/readSeveral.order')
const ControllerReadOneOrder = require('../controllers/order/readOne.order')
const ControllerUpdateOrder = require('../controllers/order/update.order')
const ControllerDeleteOrder = require('../controllers/order/delete.order')
const ControllerSendOrder = require('../controllers/order/send.order')
const ControllerCancelOrder = require('../controllers/order/cancel.order')

router.post('/', [  
     
    check('quantity', 'Cantidad vacia').notEmpty(),
    check('amountTopay', 'Cantidad a Abonar Vacio').notEmpty()

],

ControllerCreateOrder.CreateOrder)

router.get('/', ControllerReadSeveralOrders.seeOrders)

router.get('/:id', ControllerReadOneOrder.seeOrder)

router.put('/:id', ControllerUpdateOrder.modifyOrder)
router.put('/:id/enviar', ControllerSendOrder.sendOrder)
router.put('/:id/cancelar', ControllerCancelOrder.cancelOrder)

router.delete('/:id', ControllerDeleteOrder.DeleteOrder)

module.exports = router;