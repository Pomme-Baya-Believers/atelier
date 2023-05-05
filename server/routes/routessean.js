const Router = require('express').Router()
const controllersSean = require('../controllers/controllerssean.js');

Router.get('/products', controllersSean.get);
// Router.post



// module.exports.get = Router.get;