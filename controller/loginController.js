const loginService = require('../service/login.service');
const Usuario = require('../model/Usuario');

const index = (req,res) =>{
    res.render('login');
}

const login = async (req,res) =>{
    try{
        const nome = req.body.nome;
        const senha = req.body.senha;
        // confirir se existe no banco usando o model
        const usuarioBanco = await Usuario.FindOne({where:{nome:nome,senha:senha}});
        if(usuarioBanco){
            loginService.criarToken(nome);
        } else{
            throw new Error('UserNotFound');
        }
    }catch(err){
        //res.status().send() //criar um erroController        
    }
}

module.exports = {index,login};