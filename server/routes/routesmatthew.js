const Router = require('express').Router();
const controllers = require('../controllers/controllersmatthew.js');

Router.get('/product', controllers.getProduct);
Router.get('/styles', controllers.getStyles);

module.exports = Router;
