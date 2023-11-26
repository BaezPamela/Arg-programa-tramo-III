const UserController={}
const lista_Users=[
    {nombre: 'juan'},
    {nombre: 'carlos'}
];

UserController.verUsuarios= (req,res) =>{
    return res.json(lista_Users);
}

UserController.verUsuario= (req,res) =>{
    return res.json({mensaje:'ruta: ver usuario'});
}

UserController.crearUsuario= (req,res) =>{
    return res.json({mensaje:'ruta: crear usuario'});
}
    
UserController.editarUsuario= (req,res) =>{
        return res.json({mensaje:'ruta: editar usuario'});
    
}

UserController.eliminarUsuario= (req,res) =>{
        return res.json({mensaje:'ruta: eliminar usuario'});
}


module.exports = UserController;
