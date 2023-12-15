const mongoose = require('mongoose');
const {Schema,model } = require('mongoose');

const PostSchema = new Schema({
  title: String,
  description: String,
  autor:{
    type: Schema.Types.ObjectId,
    ref: 'usuario',
  },
  comments: String,
  imageURL:String,
  createdAt:String,
});


const Post = model('Post', PostSchema);

const autorObjectId = new Schema.Types.ObjectId();
const nuevoPost = new Post({
  title: 'Ejemplo',
  description: 'Descripción de ejemplo',
  autor: new mongoose.Types.ObjectId(), // Crea un nuevo ObjectId para el autor
  comments: 'Comentario de ejemplo',
  imageURL: 'URL de la imagen',
  createdAt: 'Fecha de creación',
});

nuevoPost.save()
  .then(() => {
    console.log('Documento insertado correctamente.');
    
  })
  .catch(error => {
    console.error('Error al insertar documento:', error);
    
  });

module.exports = Post;