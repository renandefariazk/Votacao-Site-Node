const express = require('express');
const Router = express.Router();
const homeController = require('../controller/homeController');

Router.get('/',homeController.index);

// Router.get('/:number',homeController.index);


module.exports = Router;