const express = require('express');
const router = express.Router();

const platosRouter = require('./foods.routes')
const ordenRouter = require('./orden.routes')
const usuariosRouter = require('./users.routes')
const statusRouter = require('./status.routes')

router.use('/comidas', platosRouter)
router.use('/orden', ordenRouter)
router.use('/usuarios', usuariosRouter)
router.use('/status', statusRouter)

module.exports = router;
