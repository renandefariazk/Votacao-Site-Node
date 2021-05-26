


const usuarioAlreadyExist = (usuario) =>{
    try{
        if(usuario){
            throw new Error('User_Already_Exists');
        }
    }catch(err){
        return err.message;
    }
}

module.exports = {usuarioAlreadyExist};