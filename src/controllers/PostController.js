const Post = require('./../models/Post.js');

const PostController = {};

//editar post


//Eliminar post
PostController.EliminarPost =async (req,res) =>{
    try{
        const {Id} = req.body;
        const post = await Post.findById(Id);

        if (!post) {
            return res.status(404).json({ mensaje: 'No se encontró el post' });
          }
      
          await Post.findByIdAndDelete(Id);
      
          return res.json({ mensaje: 'Post eliminado exitosamente' });
        } catch (error) {
          return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar eliminar el post',
            error: error
          });
        }
      };
      
      module.exports = PostController;
        