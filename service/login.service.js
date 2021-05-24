const jswtoken = require('jsonwebtoken');

function criarToken(nome){
    //jwToken.sign
    jswtoken.sign({
        nome:nome
    },process.env.PASSWORD_TOKEN, {expiresIn:'12h'})
}

module.exports = {criarToken};