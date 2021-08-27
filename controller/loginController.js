const loginService = require('../service/login.service');
const Usuario = require('../model/Usuario');
const errorController = require('./errorController');

const index = (req,res) =>{
    res.render('login');
}

const login = async (req,res) =>{
    try{
        const name = req.body.name;
        const password = req.body.password;
        // confirir se existe no banco usando o model
        const usuarioBanco = await Usuario.FindOne({where:{name:name,password:password}});
        if(usuarioBanco){
            // salvar o id da pessoa no token
            loginService.criarToken(name,usuarioBanco.userForeignKey);
            // utilizando o return
            const token = loginService.criarToken(name,usuarioBanco.userForeignKey);
            localStorage.setItem('authorization',token);

            //salvar o token em um cookie
            res.redirect('/home'); //ver se apenas /home funciona ou tem que coloca a url completa
        } else{
            throw new Error('User_Not_Found');
        }
    }catch(err){
        errorController.registroErro(res,err.message); 
    }
}

module.exports = {index,login};