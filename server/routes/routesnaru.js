const Router = require('express').Router()
const controllers = require('../controllers/controllersnaru.js')

Router.get('/', controllers.get)

module.exports = Router