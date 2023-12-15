require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const conectarMongo = require('./config/BDConfig.js');

const UserRouter = require('./routes/UserRoutes.js');
const verifyRouter = require('./routes/verifyRoutes.js');
const archivoRouter = require('./routes/archivosRoutes.js');
const commentRouter = require('./routes/commentRoutes.js');
const PostRouter = require('./routes/PostRoutes.js');


const app = express();
const PORT = 3000;

/*middleware para aceptar solicitudes en formato js*/
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors({ origin:'*'}));

/*rutas*/
app.use(UserRouter);
app.use(verifyRouter);
app.use(archivoRouter);
app.use(PostRouter);
app.use(commentRouter);


/*iniciar el servidor*/

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  
  /*conectar BD*/
conectarMongo();

});

