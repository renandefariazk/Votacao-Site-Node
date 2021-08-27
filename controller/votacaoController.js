const votacaoService = require('../service/votacao.service');
const erroController = require('../controller/errorController');

const votar = (req,res)=>{
    try{
        // talverz usa localstorage.getItem('');

        // talvez pegar o token e da um jswtoken.verify;
        // e pegar o nome e id do usuario logado;

        const userID; // id do usuario logado
        const votoNumber = req.body.voto; // voto 1 ou voto 2
        // pega o Assunto pega o numero de voto add a quantidade atual +1 e colocar o id da pessoa no array 
    }catch(err){
        erroController.registroErro(res,err.message);
    }
}

module.exports = {votar};