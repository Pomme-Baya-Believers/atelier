require("dotenv").config();

const express = require('express');
const path = require('path');
const app = express();
// const routerSean = require('./routes/routessean.js')
// const controllersSean = require('./controllers/controllerssean.js')

//import your routes

const routerNaru = require('./routes/routesnaru.js')
const routerMatthew = require('./routes/routesmatthew.js')

app.use(express.json());
app.use(express.static('client/dist'));


app.get('/sean/products', controllersSean.get);
app.use('/naru', routerNaru);

app.use('/matthew', routerMatthew);

app.listen(process.env.PORT) || 3000
console.log('Listening on port '+ process.env.PORT)
