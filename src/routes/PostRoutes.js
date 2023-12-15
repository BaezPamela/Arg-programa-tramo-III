const PostRouter = require('express').Router();
const {
    verPosts,
    verPost,
    crearPost,
    editarPost,
    eliminarPost,
 } = require('./../controllers/PostController.js');
 

 //ruta para ver posts
 PostRouter.get('/posts', verPosts);
 
 //ruta para ver post
 PostRouter.get('/post/:id', verPost);

 /*ruta crear un post*/
PostRouter.post('/post',crearPost);

/*ruta editar un post*/
PostRouter.put('/post/',editarPost);

/*eliminar post*/
PostRouter.delete('/post',eliminarPost);

module.exports =PostRouter;