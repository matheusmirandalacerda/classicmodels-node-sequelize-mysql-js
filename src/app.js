const express = require('express');

require('./config/db');

const app = express();
const router = require('./routes/index');

app.get('/', (req, res) => {
    res.send({message: 'Seja bem-vindo(a) à API do Classic Models!'})
});

app.use(express.json());

app.use('/api/v1', router);

app.listen(3000, () => {
    console.log('A API está funcionando')
});