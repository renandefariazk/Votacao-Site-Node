// require dbVotacao
const Assunto = require('../model/Assunto');
const errorController = require("../controller/errorController");

// remover isso apos adicionar o banco assunto
const index = async (req,res) =>{
    try{
        let numeroPag = req.params.number;
        if(!numeroPag){
            numeroPag = 0;
        }
        numeroPag = numeroPag * 4;
        let assuntosPag =  await Assunto.findAndCountAll({
            limit:4,
            offset:numeroPag});
        //testar o status e o send logo apos
        res.status(200).render('home',{assuntosPag:assuntosPag.rows});
    }catch(err){
        errorController.registroErro(res,err.message);
    }
}

module.exports = {index};