const jswtoken = require('jsonwebtoken');
require('dotenv').config();

const verificaToken = (req,res,next) =>{
    try{
        // localstorage.getItem('authorization');
        const auth = req.headers.authorization;
        const token = auth.split('');
        if(token[0] === 'Bearer' && token.length === 2){
            //agora verificar a senha secreta do token
            if(jswtoken.verify(token[1],process.env.PASSWORD_TOKEN)){
                next();
            }else{
                throw new Error('Unauthorized');
            }
        }else{
            throw new Error('Unauthorized');
        }
    } catch(err){
        if(err.message === 'Unauthorized'){
            res.status(401).send('Unauthorized');
        }else{
            res.status(500).send('Generic_Error');
        }
    }
}

const tokenExist = (req,res,next) =>{
    try{
        // localstorage.getItem('authorization');
        const auth = req.headers.authorization;
        // verificar se token existe
        if(auth){
            next();
        } else{
            throw new Error('Unauthorized');
        };
    } catch(err){
        if(err.message){
            res.status(401).send('Unauthorized');
        } else{
            res.status(500).send('Generic_Error');
        }
    }
}

module.exports = {verificaToken,tokenExist};