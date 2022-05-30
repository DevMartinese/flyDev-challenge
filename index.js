const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/flyDev', require('./routes/pokeRoute'));

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

module.exports = app;