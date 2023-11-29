const archivoRouter = require('express').Router();
const {
    subirArchivo,
 } = require ('./../controllers/archivosController.js');

 archivoRouter.post('/subirArchivo', subirArchivo);


module.exports = archivoRouter;