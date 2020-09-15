/* 
    Funções trabalhada aqui:
    .get('Chave') pega um valor de uma classe
    .has('aquela chave') verificar se aquela classe tem 'aquela chave'
    .delete('aquela chave') Deleta aquela chave
    .size() Serve para descobrir quantos elementos estão presentes ali
    .set() Serve para setar um conjunto chave => valor
*/

const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framwork: true });
console.log(tecnologias.react);
console.log(tecnologias.get('react')); // Pega o valor daquele map
console.log(tecnologias.get('react').framework); // 

const chavesVariadas = new Map([   
    [function () {}, 'Função'],  
    [{}, 'Objeto'],   
    [123, 'Numero']
]);

chavesVariadas.forEach( (v, k) => {
    console.log(v + ':', k);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(153, 'b');

console.log(chavesVariadas);