const Router = require('express').Router();
const multer = require('multer');

const upload = multer({ dest: 'client/dist/uploads/' });
const controllers = require('../controllers/controllersnaru');

Router.get('/', controllers.get);
Router.post('/', upload.array('photos'), controllers.post);

module.exports = Router;
