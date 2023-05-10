const Router = require('express').Router();
const controllers = require('../controllers/controllersnaru');

Router.get('/', controllers.get);
Router.post('/', controllers.post);

module.exports = Router;
