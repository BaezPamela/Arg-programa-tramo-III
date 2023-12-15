const Comment = require('./../models/Comment.js');

const CommentController = {};

// Crear comentario
CommentController.createComment = async (req, res) => {
  try {
    const { author, description } = req.body;
    const newComment = new Comment({ author, description });
    await newComment.save();
    res.json({ mensaje: 'Comentario creado exitosamente', comment: newComment });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el comentario', error: error.mensaje });
  }
};

// Editar comentario
CommentController.editComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { author, description } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(id, { author, description }, { new: true });

    if (!updatedComment) {
      return res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }

    res.json({ mensaje: 'Comentario editado exitosamente', comment: updatedComment });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al editar el comentario', error: error.mensaje });
  }
};

// Eliminar comentario
CommentController.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }

    res.json({ mensaje: 'Comentario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el comentario', error: error.mensaje });
  }
};

module.exports = CommentController;