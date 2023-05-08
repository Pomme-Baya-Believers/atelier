const Router = require('express').Router();
const controllers = require('../controllers/controllersmatthew');

Router.get('/details', controllers.getDetails);
Router.get('/meta', controllers.getMeta);

module.exports = Router;
