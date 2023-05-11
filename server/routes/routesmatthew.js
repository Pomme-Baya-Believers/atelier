const Router = require('express').Router();
const controllers = require('../controllers/controllersmatthew');

Router.get('/details', controllers.getDetails);
Router.get('/meta', controllers.getMeta);
Router.get('/product', controllers.getProduct);
Router.get('/styles', controllers.getStyles);

module.exports = Router;
