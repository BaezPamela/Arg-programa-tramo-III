const UserRouter = require('express').Router();
const {verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
 } = require('./../controllers/UserController.js');
 
 
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








module.exports =UserRouter;