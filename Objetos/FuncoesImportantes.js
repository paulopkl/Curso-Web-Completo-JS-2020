const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // Ele devide em 1 array para cada par [(Chave), (Valor)]

Object.entries(pessoa).forEach(x => { // O x representa cada elemento do objeto ou seja cada array
        console.log(x[0]+': '+x[1]);
});
console.log('  ');
Object.entries(pessoa).forEach(([chave, valor]) => { // O operador destructing desestrutura os 2 elementos 
    // retornados pelo
    // O x representa cada elemento do objeto ou seja cada array
    console.log(chave+': '+valor);
});

// Object.defineProperty([Objeto], ['Propriedade'])
Object.defineProperty(pessoa, 'DataNascimento', { // Define as caracteristicas dessa propriedade
    enumerable: false, // Passivo a ser listada: sim
    writable: false, // Não é uma propriedade que permite ser modificada, similar á Object.freze()
    value: '01/09/2019' // Define o valor dessa propriedade
});

pessoa.DataNascimento = '05/05/2005';
console.log(pessoa.DataNascimento);
console.log(Object.keys(pessoa));

// Object.assign() ECMAScript2015
const dest = { a: 1 };
// Object.freeze(dest);
const o1 = { b: 2 };
const o2 = { c: 3, a:4 };
const obj = Object.assign(dest, o1, o2); /* O objeto do primeiro paramêtro recebera os valores
dos Objetos seguintes o1 e o2 então subscrevera os valores */
console.log(dest);
Object.freeze(obj);
obj.c = 1234;
console.log(obj);