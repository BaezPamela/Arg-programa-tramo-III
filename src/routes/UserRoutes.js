const UserRouter = require('express').Router();
const {verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    
 } = require('./../controllers/UserController.js');
 const{autenticar} = require ('./../config/verifyToken.js')
 
 /*ruta ver usuarios*/
UserRouter.get('/usuarios',verUsuarios);

/*ruta ver usuario*/
UserRouter.get('/usuario/:id',verUsuario);

/*ruta crear usuario*/
UserRouter.post('/usuario',crearUsuario);

/*ruta editar usuario*/
UserRouter.put('/usuario',editarUsuario);

/*eliminar usuario*/
UserRouter.delete('/usuario',eliminarUsuario);

// Ruta para el inicio de sesión
//UserRouter.post('/autenticar', autenticar);

module.exports = UserRouter;






