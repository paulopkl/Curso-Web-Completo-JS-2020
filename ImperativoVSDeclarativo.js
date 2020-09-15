const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// IMPERATIVO para calcular média de um parâmetro de um Array
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota; // total1 = alunos[0].nota + alunos[1].nota == 17.1
}

console.log(total1 / alunos.length);

// DECLARATIVO para calcular média de um parâmetro de um Array
let getNota = alunos => alunos.nota; // == function getNota(alunos){ return{alunos.nota} }
let soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma); // maperou as notas, 
console.log(total2 / alunos.length);