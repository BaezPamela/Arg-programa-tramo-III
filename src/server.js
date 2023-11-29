require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const UserRouter = require('./routes/UserRoutes.js');
const verifyRouter = require('./routes/verifyRoutes.js');
const archivoRouter = require('./routes/archivosRoutes.js');

const app = express();
const PORT = 3000;

/*middleware para aceptar solicitudes en formato js*/
app.use(bodyParser.json());
app.use(fileUpload());

/*rutas*/
app.use(UserRouter);
app.use(verifyRouter);
app.use(archivoRouter);



/*iniciar el servidor*/

app.listen(PORT, () => {
  console.log(`servidor corriendo el el puerto ${PORT}`);
  
});

