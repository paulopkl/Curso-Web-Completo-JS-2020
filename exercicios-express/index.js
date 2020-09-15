const express = require('express');
const app = express(); // Instanciando o express
const Saudacao = require('./SaudacaoMid');
const bodyParser = require('body-parser');
const UsuarioApi = require('./api/usuario');


const produtoApi = require('./api/produto');
produtoApi(app, 'com param!');

// app.post('/usuario', UsuarioApi.salvar);
// app.get('/usuario', UsuarioApi.obter);


app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(Saudacao('Paulo Ricardo'));


app.use((req, res, next) => { // Todas as Requisições passarão por aqui
    console.log("Antes...");
    next()
});


app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} E ano = ${req.query.ano}`)
});


app.post('/corpo', (req, res) => {
    // let corpo = '';
    // req.on('data', function(parte) {
    //     corpo += parte;
    // });

    // req.on('end', function() {
    //     // res.send(corpo);
    //     res.json(JSON.parse(corpo));
    // })
    res.send(JSON.stringify(req.body));
});


app.get('/clientes/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id} selecionado!`);
});




app.get('/opa', (req, res, next) => {
    // res.send('<h1>Estou <b>bem!</b></h1><br/><br/><h2>Tipo é HTML</h2>')
    // res.json({
    //     name: "iPad 32G",
    //     price: 1899.00,
    //     discount: 0.12
    // })

    console.log("Durante...");

    res.json({
        data: [
            {id: 7, name: "ana", position: 1},
            {id: 34, name: "Bia", position: 2, diferenciado: "diferenciado"},
            {id: 73, name: "Carlos", position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        state: 200
    })

    next();
});

app.use((req, res) => { // Todas as Requisições passarão por aqui
    console.log("Depois...");
});

app.listen(3000, (req, res) => {
    console.log('Backend Executando3!!!!');
});

