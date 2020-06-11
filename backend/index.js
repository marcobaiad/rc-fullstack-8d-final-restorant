require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.json())
require('./dataBase')
const port = process.env.PORT

 const Routes = require('./routes')

 app.use('/api/v1', Routes)

app.use(function (req, res, next) {
    res.status(404).json({ mensaje: 'ERROR: 404 not found' })
})

app.listen(port, () => console.log(`Escuchando http://localhost:${port}`))
