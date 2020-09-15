const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // serve para desencodar a URL

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('<h1>Parabéns usuário Incluido!</h1>');
});

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('<h1>Parabéns</h1>');
});

app.listen(3003);