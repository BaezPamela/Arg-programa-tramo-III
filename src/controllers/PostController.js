const Post = require('./../models/Post.js');
const jwt = require('jsonwebtoken');

const { verificarToken } = require('./../utils/token.js')

const PostController = {};


//ver posteos
PostController.verPosts = async (req,res) => {
  try{
    const listaPost = await Post.find().populate('autor');
    
    return res.json(listaPost);
     }catch (error){
      return res.status(500).json({
        mensaje:"Ocurrio un error interno",
        error:error
      });
     }
}
//ver posteo
PostController.verPost = async (req,res ) =>{
  try{
    const{id} =req.params;
    
    const postEncontrado = await Post.findById(id);

    return res.json(postEncontrado);
  
  }catch (error){
    let mensaje = "Ocurrio un error interno al intentar obtener el post";

    if (error.Kind === 'ObjectId'){
      mensaje = ' No se pudo obtener el post';
    }
  return res.status(500).json({
    mensaje:mensaje,
    error:error
  });
  
  }
}
//Crear post
PostController.crearPost = async (req, res) => {
  try {
    const { title, description, comments, imageURL, createdAt } = req.body;
     
    const {token} = req.headers;
    
    
    const tokenValido = verificarToken(token);

    if(!tokenValido) {
      return res.status(500).json({
        mensaje: 'El token no es Valido',
        error: error
      });

    }

    const autor = tokenValido.id;
    
    const nuevoPost = new Post({
      title: title,
      description: description,
      autor: autor,
      comments: comments,
      imageURL: imageURL,
      createdAt: new Date(),
    });

    await nuevoPost.save();
    
         return res.json({ mensaje: 'Post creado exitosamente', post: nuevoPost });
  } catch (error) {
         return res.status(500).json({
      mensaje: 'Ocurrió un error interno al intentar crear el post',
      error: error
    });
  }
};


//Editar post
PostController.editarPost = async (req, res) => {
  try {
    const { id, title, description, imageURL } = req.body;
    
    const {token} =req.headers;

    const tokenValido = verificarToken(token);

    if(!tokenValido){
      return res.status(500).json({
        mensaje: 'El token no es valido'
      });
    }
     
    const userId = tokenValido.id;
    
    const posteo = await Post.findByIdAndUpdate(id);
      
      if(posteo.autor.toString()!== userId){
        return res.status(500).json({
          mensaje:' El autor no es el mismo'
        });
      }

      await Post.findByAndUpdate(
        id,
        {title: title, descriptio:description,imageURL:imageURL}
      );

     
      return res.json({ mensaje: 'Post actualizado con exito'});
} catch(error){
      return res.status(500).json({
    mensaje:'Ocurrio un error al interno al intentar actualizar el post',
    error:error
  });
}
}

//Eliminar post
PostController.eliminarPost = async (req,res) =>{
    try{
        const {id} = req.body;
        
        await Post.findByIdAndDelete(id);

        return res.json({ mensaje: 'El post ha sido eliminado' });
          
      } catch (error) {
          return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar eliminar el post',
            error: error
          });
        }
      };
      
      module.exports = PostController;
        