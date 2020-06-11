const express = require('express');
const router = express.Router();

const pedidosRouter = require('./orders.routes')

router.use('/pedidos', pedidosRouter)

module.exports = router;
