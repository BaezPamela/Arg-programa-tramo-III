/*middleware para verificar tokens */
const jwt = require('jsonwebtoken');
const User = require('./../models/User.js');

const verifyToken = {}

const JWT_KEY = process.env.JWT_KEY;

verifyToken.autenticar = async (req, res) => {
     try{  
       const {userName,password} = req.body;
        console.log(req.body)
       
        const usuarioEncontrado = await User.findOne({
          userName,password
        });
        
       if(!usuarioEncontrado) {
           return res.status(404).json({ mensaje:'El usuario no ha sido encontrado'});
       }
       
       const datos ={
          id: usuarioEncontrado._id,
          userName:usuarioEncontrado.userName,
          email:usuarioEncontrado.email,
          avatarURL: usuarioEncontrado.avatarURL,
       }
       
       //genera el token y la guarda en la variable token
       let token = jwt.sign(datos , JWT_KEY);  
    
        res.json({ token,datos });
      }catch (error){
        return res.status(500).json({ mensaje:'Se produjo un error interno'});

  }
    
}

verifyToken.registrar = (req, res) => {
       
}

verifyToken.verificarToken = (req, res) => {
  const token = req.body.token;

  try{
    let desencriptado = jwt.verify(token, JWT_KEY);

    res.json({datos: desencriptado});
  }catch(error){
     res.status(500).json({
    mensaje:'se ha generado un error',
    error:error,
   });
  }

}

module.exports = verifyToken;