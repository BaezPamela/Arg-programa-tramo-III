const User = require('./../models/User.js');

const UserController = {}

/*ver usuarios*/
UserController.verUsuarios= async (req,res) => {
    try{
        const listaUsuarios = await User.find();
        
        return res.json(listaUsuarios);

    } catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un error interno',
            error: error
        });
    }
    
    
}

/*ver usuario*/
UserController.verUsuario= async (req,res) =>{
    try{
        const { id} = req.params;
        
        const usuarioEncontrado = await User.findById(id);
         return res.json(usuarioEncontrado);
        } catch(error){
             let mensaje = 'ocurrio un error al intentar obtener el usuario'
         
        if (error.Kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el usuario'
         } 
           
         return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
    

}
/*crear usuario*/
UserController.crearUsuario= async (req,res) => {
    try {
        const { userName, password, email, avatarURL} = req.body;
       
        const nuevoUsuario = new User ({
            userName: userName,
            password:password,
            email: email,
            avatarURL:avatarURL,
         });
          
           await nuevoUsuario.save();

        return res.json({mensaje:'el usuario ha sido creado'});
    }catch (error){
        return res.status(500).json({
            mensaje:'ocurrio un error al intentar crear un usuario',
            error: error
        });
    }
   

    }
  /*editar usuario*/  
UserController.editarUsuario= async (req,res) =>{
    try {
        const { id, userName, password, email, avatarURL} = req.body
       
        await User.findByIdAndUpdate (
             id,
            { userName:userName, password:password,email:email, avatarURL:avatarURL},
            );

        
            return res.json({mensaje:'el usuario ha sido actualizado'});
    }catch (error){
        return res.status(500).json({
            mensaje:'ocurrio un error al intentar editar un usuario',
            error: error
        });
    }
     
    
    
    return res.json({mensaje:'ruta: editar usuario'});
    
}
/*eliminar usuario*/
UserController.eliminarUsuario= async (req,res) =>{
    try {
        const {id} = req.body;
       
        await User.findByIdAndDelete (id);
            

        return res.json({mensaje:'el usuario ha sido eliminado'});
    }catch (error){
        return res.status(500).json({
            mensaje:'ocurrio un error al intentar eliminar el usuario',
            error: error
        });
    }
        
    
    return res.json({mensaje:'ruta: eliminar usuario'});
}




module.exports = UserController;
