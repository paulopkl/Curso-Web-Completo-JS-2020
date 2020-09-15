const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // Instânciar o express

app.use(express.static('.')); // Ele vai prover os arquivos státicos desta página através
// do middleware
app.use(bodyParser.urlencoded({ extended: true })); /* E se vier Algum formato a partir de
uma submit de um formulário, esse código vai ser responsável por ler os dados e transformar isso
em objeto
express().use('/teste', bodyParser.urlencoded({ extended: true })); <- Se uma requisição começar
com '/teste' ele chama o urlencoded
*/
app.use(bodyParser.json()); // se vier um json dentro do corpo da requisição

app.get('/teste', (req, res) => res.send(new Date)) /* Quando vier uma requisição do tipo 'GET'
 no '/teste'. |(req, res) => res.send('OK')| -> é uma função MIDDLEWARE que é chamada quando
'/teste' for evocado a partir de uma requisição do tipo 'GET'
*/

const multer = require('multer'); // é usado para enterpretar o formulário q veio o arquivo de upload
const storage = multer.diskStorage({// Personaliza tanto a pasta que voce vai salvar os arquivos, como o nome do arquivo
// no momento de salvar ele

    destination: function (req, file, callback) {
        callback(null, './upload'); // Define a pasta destino
    },

    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`); // Define o nome destino de cada 
        // arquivo. DataAtual_NomeOriginal
    }
}); 

const upload = multer({ storage }).single('arquivo'); // interpleta o upload, o single é o input
// com name="arquivo"

app.post('/upload', (req, res) => { // Rota '/upload' recebe uma requisição tipo post
    upload(req, res, erro => {
        if (erro) {
            return res.end('Ocorreu um erro.');
        }

        res.end('Concluido com sucesso.');
    })
});

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
});

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0;
    res.send({
        resultado: par ? 'par' : 'impar'
    });
});

app.listen(8080, () => console.log('Executandooo.......'));