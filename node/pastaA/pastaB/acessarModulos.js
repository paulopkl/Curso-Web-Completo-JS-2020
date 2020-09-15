const moduloA = require('../../moduloA.js');
console.log(moduloA);

const saudacao = require('saudacao'); // Ele encontrou no node_modules sem especificar o caminho
// Ele entra no index.js porque é "index" mesmo

console.log(saudacao.ola);

const http = require('http');

// http.createServer((req, res) => {
//     res.innerHTML = '<p>Hello world</p>';
//     res.end()
// }).listen(8080)

const C = require('./pastaC');
console.log(C.ola2);