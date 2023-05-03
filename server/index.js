require("dotenv").config();

const express = require('express')
const App = express()
const routesNaru = require('./routes/routesnaru.js')
const routesMatthew = require('./routes/routesmatthew.js')

app.listen(process.env.PORT) || 3000