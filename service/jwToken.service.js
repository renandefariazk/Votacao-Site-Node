const jswtoken = require('jsonwebtoken');
require('dotenv').config();
const {LocalStorage} = require('node-localstorage');

const verificaToken = (req,res,next) =>{
    try{
        const localStorage = new LocalStorage('/scratch');
        const auth = localStorage.getItem('authorization');
        //agora verificar a senha secreta do token
        if(jswtoken.verify(auth,process.env.PASSWORD_TOKEN)){
            next();
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
        const localStorage = new LocalStorage('/scratch');
        const auth = localStorage.getItem('authorization');
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