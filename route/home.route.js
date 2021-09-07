const express = require('express');
const Router = express.Router();
const homeController = require('../controller/homeController');
const jswtoken = require('../service/jwToken.service');

Router.get('/home',jswtoken.verificaToken,homeController.index);

// Router.get('/:number',homeController.index);


module.exports = Router;