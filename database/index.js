const Sequelize = require('sequelize');
const dataConfig = require('../config/database');

const Assunto = require('../model/Assunto');
const Usuario = require('../model/Usuario');
const Votacao = require('../model/Votacao');

const connection = new Sequelize(dataConfig);
try{
    connection

    Usuario.init(connection);
    Assunto.init(connection);
    Votacao.init(connection);

    Usuario.associate(connection.models);
    Assunto.associate(connection.models);
    // Votacao.associate(connection);

    console.log('Banco Connectado com Sucesso')
}catch(err){
    console.log('Erro no Banco '+err.message);
}