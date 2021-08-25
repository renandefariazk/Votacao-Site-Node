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
        const bancoUsuario = await Usuario.findOne({where:{name:name,password:password}});
        // o err nao esta funcionando aqui
        // await cadastroService.usuarioAlreadyExist(bancoUsuario);
        if(bancoUsuario == null){
            await Usuario.create({
                name:name,
                password:password
            });
            res.redirect('/');
        }
        else{
            // talvez seja melhor manda uma mensagem que ususario ja existe
            res.redirect('/');
            // melhor apenas direcionar em programa monolitico
            // throw new Error("User_Already_Exists");
        }
    }catch(err){
        errorController.registroErro(res,err.message);
    }
}

module.exports = {index,cadastro}