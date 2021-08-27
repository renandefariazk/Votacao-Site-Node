const {DataTypes,Model} = require('sequelize');

class Assunto extends Model {
    static init(connection){
        super.init({
            nome:DataTypes.STRING,
            votos1:DataTypes.INTEGER,
            votos2:DataTypes.INTEGER,
            idUserArray:DataTypes.STRING,
            userForeignKey:DataTypes.INTEGER
        },{
            sequelize:connection
        })
    }
    static associate(models){
        this.belongsTo(models.Usuario,{foreignKey:"userForeignKey",targetKey:"userForeignKey",as:"AssuntoUsuario"});
    }
}

module.exports = Assunto;


// const Sequelize = require('sequelize');
// const connection = require('../database/database');

// const Assunto = connection.define('assunto',{
//     nome:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     votos1:{
//         type:Sequelize.INTEGER,
//         allowNull:false,
//         default:0
//     },
//     votos2:{
//         type:Sequelize.INTEGER,
//         allowNull:false,
//         default:0
//     },
//     idUserArray:{
//         type:Sequelize.STRING,
//         allowNull:true
//     },
//     userForeignKey:{
//         type:Sequelize.INTEGER,
//         allowNull:true
//     }
// })

// Assunto.sync({forced:false});


// module.exports = Assunto;