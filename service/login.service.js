const jswtoken = require('jsonwebtoken');

function criarToken(nome,id){
    //jwToken.sign
    jswtoken.sign({
        id:id,
        nome:nome
    },process.env.PASSWORD_TOKEN, {expiresIn:'12h'})
    // return ou localStorage.setItem('authorization',token);
}

module.exports = {criarToken};