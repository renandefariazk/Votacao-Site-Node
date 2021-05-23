const express = require('express');
const Router = express.Router();
const cadastroController = require('../controller/cadastroController');

Router.get('/cadastro',cadastroController.index);
Router.post('/cadastro',cadastroController.cadastro);

module.exports = Router;