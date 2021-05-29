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
            loginService.criarToken(name);
            res.redirect(''); //ainda nao tem o admin
        } else{
            throw new Error('User_Not_Found');
        }
    }catch(err){
        errorController.registroErro(res,err.message); 
    }
}

module.exports = {index,login};