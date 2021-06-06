const express = require('express');
const Router = express.Router();
const loginController = require('../controller/loginController');

Router.post('/login',loginController.login);

module.exports = Router;