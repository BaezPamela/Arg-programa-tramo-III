const PostRouter = require('express').Router();
const {
    crearPost,
    editarPost,
    eliminarPost,
 } = require('./../controllers/PostController.js');
 

/*ruta crear usuario*/
UserRouter.post('/post',crearPost);

/*ruta editar usuario*/
UserRouter.put('/post',editarPost);

/*eliminar usuario*/
UserRouter.delete('/post',eliminarPost);

module.exports =PostRouter;