const Sequelize = require('sequelize');
const connection = require('../database/database');

const Usuario = connection.define('usuario',{
    name:{
        type: Sequelize.STRING,
        allowNull: false  
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    } 
})

Usuario.sync({forced:false})

module.exports = Usuario;