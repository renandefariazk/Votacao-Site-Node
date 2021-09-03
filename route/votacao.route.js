const express = require('express');
const Router = express.Router();
const votacaoController = require('../controller/votacaoController');

Router.post('/votacao',votacaoController.votar);
Router.post('/votacaoCreate',votacaoController.create);

module.exports = Router;