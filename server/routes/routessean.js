const Router = require('express').Router();
const controllers = require('../controllers/controllerssean');

Router.get('/', controllers.get);
Router.get('/related', controllers.getRelated);

module.exports = Router;
