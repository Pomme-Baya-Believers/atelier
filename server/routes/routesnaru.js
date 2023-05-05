const Router = require('express').Router();
const controllers = require('../controllers/controllersnaru');

Router.get('/', controllers.get);

module.exports = Router;
