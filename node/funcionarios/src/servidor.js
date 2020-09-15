const express = require('express');

const porta = 3000;

const app = express();

const bodyParser = require('body-parser');

const bancoDeDados = require('./bancoDeDados');

// App.get('/', (requisicao, resposta, proximo) => {
//     console.log('Middleware...');
//     proximo();
// });

// App.get('/', (requisicao, resposta, proximo) => {
//     resposta.send('<h1><b><i>Hello World</i></b></h1><br>' + { nome: "Notebook", preco: 123.45 });
// });

app.use(bodyParser.urlencoded( { extended: true } ));

app.get('/produtos', (requisicao, resposta) => {
    resposta.send(bancoDeDados.getProdutos());
});

app.get('/produtos:id', (requisicao, resposta, proximo) => {
    resposta.send(bancoDeDados.getProduto(requisicao.params.id));
})

app.post('/produtos', (requisicao, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco,
    })
    resposta.send(produto);
});

app.put('/produtos/:id', (requisicao, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: requisicao.params.id,
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto);
});

app.delete('/produtos/:id', (requisicao, resposta, next) => {
    const produto = bancoDeDados.excluirProduto(requisicao.params.id);
    resposta.send(produto); // JSON
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});