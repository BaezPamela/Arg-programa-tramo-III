const {Schema,model } = require('mongoose');



const UsuarioSchema = new Schema({
  userName: String,
  password: String,
  email: String,
  avatarURL: String
});


const User = model('Usuario', UsuarioSchema);


module.exports = User;