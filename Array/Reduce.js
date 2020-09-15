const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.9, bolsista: true },
    { nome: "Albert", nota: 10, bolsista: false },
    { nome: "lindsey", nota: 4.4, bolsista: true },
    { nome: "Rebeca", nota: 2, bolsista: false }
];

let resultado = alunos.map(a => a.nota);

console.log(resultado);
let redu = resultado.reduce( (acumulador, atual) => {
    console.log(acumulador, atual);
    return acumulador + atual;
})