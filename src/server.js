require('dotenv').config()

const express = require('express');
const server = express();

const PORT = 3000;



    

  
    server.get('/', (req, res) => {
        res.send('hola mundo!');

    });
   
/*iniciar el servidor*/
server.listen(PORT, () => {
  console.log(`servidor corriendo el el puerto ${PORT}`);
  
});