const erroController = require('../controller/errorController');
const jswtoken = require('jsonwebtoken');
const Assunto = require('../model/Assunto');
require('dotenv').config();

const votar = (req,res)=>{
    try{
        // talverz usa localstorage.getItem('');

        // talvez pegar o token e da um jswtoken.verify;
        // e pegar o nome e id do usuario logado;

        const userID = 0; // id do usuario logado
        const votoNumber = req.body.voto; // voto 1 ou voto 2
        // pega o Assunto pega o numero de voto add a quantidade atual +1 e colocar o id da pessoa no array 
    }catch(err){
        erroController.registroErro(res,err.message);
    }
}

const create = (req,res)=>{
    try{
        const tokenFull = localStorage.getItem('authorization');
        const tokenArray = tokenFull.split('');
        const token = jswtoken.verify(tokenArray[1],process.env.PASSWORD_TOKEN);
        const nome = token.nome;
        const userId = tokne.id;
        Assunto.create({
            nome:nome,
            userForeignKey:userId
        });
        res.redirect('/home');
    }catch(err){
        erroController.registroErro(res,err.message);
    }
}
module.exports = {votar,create};