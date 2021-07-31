const Sequelize = require('sequelize');
const dataConfig = require('../config/database');

const Assunto = require('../model/Assunto');
const Usuario = require('../model/Usuario');
const Votacao = require('../model/Votacao');

const connection = new Sequelize(dataConfig);
try{
    connection

    Assunto.init(connection);
    Usuario.init(connection);
    Votacao.init(connection);

    // Assunto.associate(connection);
    // Usuario.associate(connection);
    // Votacao.associate(connection);

    console.log('Banco Connectado com Sucesso')
}catch(err){
    console.log('Erro no Banco '+err.message);
}