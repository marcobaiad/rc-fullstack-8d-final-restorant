const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3001




app.listen(port, () => console.log(`Escuchando http://localhost:${port}`))
