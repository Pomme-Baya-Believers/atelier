require("dotenv").config();

const express = require('express')
const path = require('path')
const app = express()
//import your routes
const routerNaru = require('./routes/routesnaru.js')

app.use(express.json())
app.use(express.static('client/dist'))

app.use('/naru', routerNaru)

app.listen(process.env.PORT) || 3000
console.log('Listening on port '+process.env.PORT)
