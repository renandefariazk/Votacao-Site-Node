const loginService = require('../service/login.service');

const index = (req,res) =>{
    res.render('login');
}

const login = async (req,res) =>{
    const nome = req.body.nome;
    const senha = req.body.senha;
    // confirir se existe no banco usando o model
    loginService.criarToken();
}

module.exports = {index,login};