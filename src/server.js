require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./routes/UserRoutes.js');

const verifyRouter = require('./routes/verifyRoutes.js');


const app = express();
const PORT = 3000;

/*midleware para aceptar solicitudes en formato js*/

app.use(bodyParser.json());


app.use(UserRouter);
app.use(verifyRouter);

/*iniciar el servidor*/

app.listen(PORT, () => {
  console.log(`servidor corriendo el el puerto ${PORT}`);
  
});

