// require dbVotacao
const Assunto = require('../model/Assunto');

// remover isso apos adicionar o banco assunto
const index = async (req,res) =>{
    res.render('home');
}

const pagIndex = async (req,res) =>{
    const numeroPag = req.params.number;
    if(!numeroPag){
        numeroPag = 0;
    }
    numeroPag = numeroPag * 4;
    const assuntosPag = Assunto.findAndCount({
        limit:4,
        offset:numeroPag});
    //testar o status e o send logo apos
    res.status(200).send('home',assuntosPag);
}

module.exports = {index,pagIndex};