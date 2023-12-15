const express = require('express');
const commentRouter = express.Router();
const CommentController = require('../controllers/CommentController');

// Crear comentario
commentRouter.post('/comments', CommentController.createComment);

// Actualizar comentario por su ID
commentRouter.put('/comments/:id', CommentController.editComment);

// Eliminar comentario por su ID
commentRouter.delete('/comments/:id', CommentController.deleteComment);

module.exports = commentRouter;