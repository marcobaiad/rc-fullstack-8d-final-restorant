const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const ControllerCreateOrder = require('../controllers/order/user/create.order')
const ControllerReadSeveralOrders = require('../controllers/order/admin/readSeveral.order')
const ControllerReadOneOrder = require('../controllers/order/admin/readOne.order')
const ControllerUpdateOrder = require('../controllers/order/admin/update.order')
const ControllerDeleteOrder = require('../controllers/order/admin/delete.order')
const ControllerSendOrder = require('../controllers/order/admin/send.order')
const ControllerCancelOrder = require('../controllers/order/user/cancel.order')

router.post('/', [  
     
    check('quantity', 'Cantidad vacia').notEmpty(),
    check('amountTopay', 'Cantidad a Abonar Vacio').notEmpty()

],

ControllerCreateOrder.CreateOrder)

router.get('/:id', ControllerReadOneOrder.seeOrder)
router.get('/', ControllerReadSeveralOrders.seeOrders)

router.put('/:id/cancelar', ControllerCancelOrder.cancelOrder) 
router.put('/:id/enviar', ControllerSendOrder.sendOrder)
router.put('/:id', ControllerUpdateOrder.modifyOrder)

router.delete('/:id', ControllerDeleteOrder.DeleteOrder)

module.exports = router;