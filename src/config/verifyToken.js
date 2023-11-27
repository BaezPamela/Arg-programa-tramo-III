/*middleware para verificar tokens */
var jwt = require('jsonwebtoken');

const verifyToken = {}

const JWT_KEY = process.env.JWT_KEY;

const usuarios=[
    { id: 1, usuario:'pamela', clave:'123456'},
    { id: 2, usuario:'mariano', clave:'654321'},
];



verifyToken.autenticar = (req, res) => {
    const usuario = req.body.usuario;
    
    let token = jwt.sign({usuario: usuario }, JWT_KEY);  
    
        res.json({ token: token }); 
    
        
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