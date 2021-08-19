const express = require('express');
const Router = express.Router();
const loginController = require('../controller/loginController');

Router.post('/',loginController.login);

module.exports = Router;