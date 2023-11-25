require('dotenv').config();

const express = require('express');
const app = express();

const PORT = 3000;


app.get('/',(req, res) => {
    res.send('Hola mundo!!');
});



app.listen(PORT, () => {
  console.log(`servidor corriendo el el puerto ${PORT}`);

});