const express = require('express');
const commentRouter = express.Router();
const {
    listarComments,
    crearComment,

} = require('../controllers/CommentController');


// ver comentario
commentRouter.post('/comments/:idPosteo', listarComments)
// Crear comentario
commentRouter.post('/comments', crearComment);

// Actualizar comentario por su ID
commentRouter.put('/comments/:id', editarComment);

// Eliminar comentario por su ID
commentRouter.delete('/comments/:id', deleteComment);

module.exports = commentRouter;