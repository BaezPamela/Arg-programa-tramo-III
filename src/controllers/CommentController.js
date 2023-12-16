const Comment = require('./../models/Comment.js');
const {verificarToken} = require ('./.././utils/token.js')

const CommentController = {};

commentController.listarComments = async(req,res) => {
  try{
    const {idPost} = req.params;
    const commentEncontrados = await Comment.find({
      post:idPost,
      }).populate('autor');

    return res.json(commentEncontrados);
  }catch (error){
    return res.status(500).json({
      mensaje:'No se pudo obtener los comentarios del post',
      error:error
    });
  }
}

// Crear comentario
CommentController.crearComment = async (req, res) => {
  try {
    const {  description, idPost } = req.body;
    const {token} = req.headers;

    const tokenValido = verificarToken(token);
    
    if(!tokenValido){
      return res.status(500).json({
        mensaje:'El token no es valido',
        
      });
      
    }

    const autor = tokenValido.id;

    const newComment = new Comment({
       autor:autor, 
       description:description ,
       post:idPost,
      });

      
      await newComment.save();
      return res.json({ mensaje: 'Comentario creado exitosamente', comment: newComment });
      }catch (error){
        console.log(error);
        return res.status(500).json({
          mensaje:'error al crear el comentario',
          error:save
        });
      }
    
  } 
  


// Editar comentario
CommentController.editarComment= async (req, res) => {
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