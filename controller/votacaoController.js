const erroController = require('../controller/errorController');
const jswtoken = require('jsonwebtoken');
const Assunto = require('../model/Assunto');
const {LocalStorage} = require('node-localstorage');
require('dotenv').config();

const votar = (req,res)=>{
    try{
        const localStorage = new LocalStorage("../scratch");
        const tokenFull = localStorage.getItem('authorization');
        const tokenArray = tokenFull.split('');
        const token = jswtoken.verify(tokenArray[1],process.env.PASSWORD_TOKEN);
        const userId = token.id;
        // e pegar o nome e id do usuario logado;

        // id do usuario logado
        // voto 1 ou voto 2
        // pega o Assunto pega o numero de voto add a quantidade atual +1 e colocar o id da pessoa no array


        
    }catch(err){
        erroController.registroErro(res,err.message);
    }
}

const create = (req,res)=>{
    try{
        const localStorage = new LocalStorage('../scratch');
        const tokenFull = localStorage.getItem('authorization');
        const tokenArray = tokenFull.split('');
        const token = jswtoken.verify(tokenArray[1],process.env.PASSWORD_TOKEN);
        const nome = token.nome;
        const userId = token.id;
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