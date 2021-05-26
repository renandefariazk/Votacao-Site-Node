const Usuario = require('../model/Usuario');
const cadastroService = require('../service/cadastro.service');
const errorController = require('./errorController');


const index = (req,res) =>{
    res.render('cadastro');
}
const cadastro = async (req,res) =>{
    try{
        const name = req.body.name;
        const password = req.body.password;
        const bancoUsuario = await Usuario.Find({where:{name:name,password:password}});
        cadastroService.usuarioAlreadyExist(bancoUsuario);
        await Usuario.Create({
            name:name,
            password:password
        });
    }catch(err){
        errorController.registroErro(res,err.message);
    }
}

module.exports = {index,cadastro}