const express = require('express');
const Router = express.Router();
const homeController = require('../controller/homeController');

Router.get('/',homeController.index);


module.exports = Router;