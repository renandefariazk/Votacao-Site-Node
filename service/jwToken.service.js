const jswtoken = require('jsonwebtoken');

const verificaToken = (req,res,next) =>{
    try{
        const auth = req.headers.authorization;
        const token = auth.split('');
        if(token[0] === 'Bearer' && token.length === 2){
            next()
        }else{
            throw new Error('AcessNotAuthorization');
        }
    } catch(err){
        //verificar se isso funciona
        //res.status().send()  criar um erroController 
    }
}

const tokenPassword = (req,res,next) =>{
    try{
        const auth = req.headers.authorization;
        const token = auth.split('');
        if(jswtoken.verify(token[0],process.env.PASSWORD_TOKEN)){
            next()
        } else{
            throw new Error('AcessNotAuthorization');
        };
    } catch(err){
        // res.status().send()  criar um erroController 
    }
}

module.exports = {verificaToken};