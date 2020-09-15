
// let p = new Promise(function(cumprirPromesa) {
//     cumprirPromesa({
//         x: 3,
//         y: 4
//     });
// });

// p.then(function(valor) {
//     console.log(valor.x, valor.y);
//     console.log(valor);
// });

// let x = new Promise(faça => {
//     faça(9 + 4);
// });

// x.then(valor1 => console.log(valor1))

/////////////////////


// pr.then(value => console.log(value));

const primeiroElemento = ArrayOuString => ArrayOuString[0];
const primeiraLetra = string => string[0];
const converter = letra => letra.toLowerCase();

let pr = new Promise(res => res(['Ana', 'Bia', 'Carlos', 'Daniel']));

pr.then(primeiroElemento)
    .then(primeiraLetra)
    .then(converter)
    .then(console.log);


new Promise(resolve => resolve(['PAULO', 'RICARDO', 'ALVES']))
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(converter)
    .then(v => console.log(v));