const express = require('express');
const router = express.Router();

const pedidosRouter = require('./orders.routes')
const usuariosRouter = require('./users.routes')

router.use('/pedidos', pedidosRouter)
router.use('/usuarios', usuariosRouter)

module.exports = router;
