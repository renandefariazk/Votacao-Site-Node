


const registroErro = (res, erro) =>{
    if(erro === 'User_Not_Found'){
        res.status(404).send('User_Not_Found');
    }else if(erro === 'User_Already_Exists'){
        res.status(422).send('User_Already_Exists');
    }else if(erro === 'Wrong_Password'){
        res.status(403).send('Wrong_Password');
    }else if(erro === 'Bad_Request'){
        res.status(400).send('Bad_Request');
    }else if(erro === 'Unauthorized'){
        res.status(401).send('Unauthorized');
    }else{
        res.status(500).send('erro Generico');
    }
}

module.exports = {registroErro};