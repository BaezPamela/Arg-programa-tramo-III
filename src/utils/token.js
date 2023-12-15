const jwt = require('jsonwebtoken');

const JWT_KEY = process.env.JWT_KEY;

const verificarToken = (token) => {
    try{
        let desencriptado = jwt.verify(token, JWT_KEY);
      
         return desencriptado;
    
    }catch(error){
        return false;
    }
    
}

module.exports = {
    verificarToken
}