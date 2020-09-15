console.log(typeof Array, typeof new Array);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

console.log(aprovados[3]);
aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados[3]);

console.log(aprovados.length);

aprovados[9] = 'Raphael';
console.log(aprovados);
console.log(aprovados[8] === undefined, aprovados[7] == null);
aprovados.push(157);

let batateros = aprovados.sort(); // Ordena por ordem: Numeros crescente, ordem alfabética; modifica totalmente a array
delete aprovados[0];
aprovados.pop();
aprovados.pop();
aprovados.pop();
aprovados.pop();

console.log(aprovados, batateros);
console.log(aprovados === batateros);

delete aprovados[1];


console.log(aprovados[1]);
console.log(aprovados);
// console.log(aprovados.splice(4)); // Remove o indice, indicado
console.log(aprovados.splice(2, 0, "aaa", "sss"));// não funciona direto com o console.log
console.log(aprovados);