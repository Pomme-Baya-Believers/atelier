require("dotenv").config();

const express = require('express');
const path = require('path');
<<<<<<< HEAD

const app = express();
// const routerSean = require('./routes/routessean.js')
// const controllersSean = require('./controllers/controllerssean');

  //import your routes
const routerNaru = require('./routes/routesnaru.js');
const routerSean = require('./routes/routessean.js');
=======
const app = express();
// const routerSean = require('./routes/routessean.js')
// const controllersSean = require('./controllers/controllerssean.js')

//import your routes
const routerNaru = require('./routes/routesnaru.js');
const routerMatthew = require('./routes/routesmatthew.js');
>>>>>>> 1164ce342bdd79e8194684890601795baf1d5a95

app.use(express.json());
app.use(express.static('client/dist'));

<<<<<<< HEAD
app.use('/sean', routerSean);
app.use('/naru', routerNaru);
=======
// app.get('/sean/products',  controllersSean.get);
// app.use('/naru', routerNaru)
app.use('/matthew', routerMatthew);
>>>>>>> 1164ce342bdd79e8194684890601795baf1d5a95

app.listen(process.env.PORT) || 3000
console.log('Listening on port ' + process.env.PORT);
