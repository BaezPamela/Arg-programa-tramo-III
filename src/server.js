require('dotenv').config()

const express = require('express');
const UserRouter = require('./routes/UserRoutes.js');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
        res.send('hola mundo!');
});
 
app.use(UserRouter);

/*iniciar el servidor*/

app.listen(PORT, () => {
  console.log(`servidor corriendo el el puerto ${PORT}`);
  
});

