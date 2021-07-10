const {DataTypes,Model} = require('sequelize');

class Usuario extends Model {
    static init(connection){
        super.init({
            name:DataTypes.STRING,
            password:DataTypes.STRING,
            userForeignKey:{primaryKey:true ,type:DataTypes.INTEGER}
        },{
            sequelize:connection
        })
    }
    static associate(models){

    }
}

module.exports = Usuario;



// const Sequelize = require('sequelize');
// const connection = require('../database/database');

// const Usuario = connection.define('usuario',{
//     name:{
//         type: Sequelize.STRING,
//         allowNull: false  
//     },
//     password:{
//         type: Sequelize.STRING,
//         allowNull:false
//     },
//     userForeignKey:{
//         type:Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull:false,
        
//     }
// })

// Usuario.sync({forced:false})

// module.exports = Usuario;