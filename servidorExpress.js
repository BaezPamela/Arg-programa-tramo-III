const express = require('express');
const server = express();
const PORT = 3000;


/*funciones*/
function validarUsuario(req ,res ,next) {
    const usuarioValido = true;
    if(usuarioValido){
        next();
    }else{
        res.status(401).send('Elusuariono es valido');   
    }
}

/*middlewares */
//server.use(validarUsuario); //comentado porque afecta a todas las rutas
        server.use(express.static('public'));
    

    /* defino rutas*/
server.get('/', (req, res) => {
        res.send('hola mundo!');

    });
    server.post('/formulario',(req,res) => { 
        res.send('se envio formulario');
    });
    server.get('/panel',[validarUsuario] ,(req, res) => {
        res.send('Bienvenido al panel');
    });
       
    server.get('/buscarUsuario',(req,res) => { 
    const encontrado= true;
    
    if (encontrado) {
        res.status(200).send('status 200: El usuario fue encontrado');

    }else{
        res.status(404).send('status 404:El usuario no se encontro');
    }
});

server.get('/200',(req, res) => {

    res.status(200).send('status 200:ok');
})

server.get('/301',(req, res) => {

    res.status(301).send('status 301: la paina se traslado a otro lugar de manera permanente');
})

server.get('/400',(req, res) => {

    res.status(400).send('Bad request.ocurrio un error');
})


server.listen(PORT, () => {
  console.log(`servidor corriendo el el puerto ${PORT}`);
});