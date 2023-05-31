const express = require('express');

require('./config/db');

const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Seja bem-vindo(a) à API do Classic Models!'})
});

app.listen(3000, () => {
    console.log('A API está funcionando')
});