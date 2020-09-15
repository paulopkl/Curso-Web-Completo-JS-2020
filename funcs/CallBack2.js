const notas = [7.7, 6.5, 5.7, 9.7, 8.7, 3.8, 9.0];


// Sem CallBack
let notasBaixas = [];
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// Com CallBack
notasBaixas2 = notas.filter(function (x){
    return x < 7;
});
console.log(notasBaixas2);

// Com CallBack
const notasBaixas3 = notas.filter(x => x < 7 );
console.log(notasBaixas3);

const escola = {
    Aluno: 'Ana',
    Numero: 21,
    idade: 17
}