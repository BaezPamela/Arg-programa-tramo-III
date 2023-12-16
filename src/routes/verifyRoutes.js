const verifyRouter = require('express').Router();

const {
    autenticar,
    registrar,
    verificarToken,

}= require('../config/verifyToken.js');

verifyRouter.post('/autenticar',autenticar);

verifyRouter.post('/verificar',verificarToken);






module.exports = verifyRouter;
