const Escola = [{ 
        nome: 'TurmaM1', 
        alunos: [{ nome: 'gustavo', nota: 8.1 }, { nome: 'Ana', nota: 9.3 }]
    }, {
        nome: 'TurmaM2',
        alunos: [{ nome: 'Rebeca', nota: 8.9 }, { nome: 'Roberto', nota: 7.3 }]
    }
]; 

// IMPERATIVO
let notas = [].concat(
    Escola[0].alunos[0].nota, 
    Escola[0].alunos[1].nota,
    Escola[1].alunos[0].nota,
    Escola[1].alunos[1].nota    
);
console.log(notas);

// DECLARATIVO
const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);
const Notas1 = Escola.map(getNotasDaTurma);
console.log(Notas1);

// FlatMap
Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback), this);
}

const notas2 = Escola.flatMap(getNotasDaTurma);
console.log(notas2)