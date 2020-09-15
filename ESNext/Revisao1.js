// Let Const
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);

// Template String
const produto = 'iPad';
console.log(`${produto} é caro`);

// Destruturing
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 } // ele pega os atributos de um objeto
console.log(i, nome);

const [um, dois, tres, quatro, cinco, seis, , , , , onze] = "ULDPAAICRROO";

console.log(quatro, cinco, um, dois, onze);