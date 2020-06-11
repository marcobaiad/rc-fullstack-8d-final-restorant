const express = require('express');
const router = express.Router();

const pedidosRouter = require('./orders.routes')
const usuariosRouter = require('./users.routes')
const statusRouter = require('./status.routes')

router.use('/pedidos', pedidosRouter)
router.use('/usuarios', usuariosRouter)
router.use('/status', statusRouter)

module.exports = router;
