const notas = [6.7, 7.4, 9.8, 6.1];

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'priscila',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
        console.log(` ${atributo} = ${pessoa[atributo]}`);
}

console.log(atributo);