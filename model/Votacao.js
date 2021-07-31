const{DataTypes,Model} = require('sequelize');

class Votacao extends Model {
    static init(connection){
        super.init({
            userForeignKey:DataTypes.INTEGER
        },{
            sequelize:connection
        })
    }
    static associate(models){
        // this.belongsToMany(models.Assunto,{foreignKey:'userForeignKey',targetKey:'',as:'VotacaoAssunto'});
        // this.belongsToMany(models.User,{foreignKey:'userForeignKey',targetKey:'',as:'VotacaoUser'});
    }
}

module.exports = Votacao;


// const Sequelize = require('sequelize');
// const connection = require('../database/database');

// const User = require('../model/Usuario');
// const Assunto = require('../model/Assunto');

// const Votacao = connection.define('votacao',{
//     userForeignKey:{
//         type:Sequelize.INTEGER,
//         allowNull:false
//     }
// });

// Votacao.sync({forced:false});

// //User.belongsToMany(Assunto,{through:userForeignKey});
// //Assunto.belongsToMany(User,{through:userForeignKey});

// module.exports = Votacao;