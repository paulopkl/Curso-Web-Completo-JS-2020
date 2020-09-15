// Object.preventExtensions evita que o objeto seja extendido, não permitindo adicionar novos atributos
const Produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99,
    tag: 'Promoção'
});

console.log('Extensivel:', Object.isExtensible(Produto)); // Object.isExtensible testa se é extensivel

Produto.nome = 'Borracha';
Produto.batatias = 'exo'; // Não funciona porque está setado para não permitir
delete Produto.tag;

console.log(Produto, Produto.batatias);

// Object.seal, Você não consegue adicionar novos atributos nem Excluilos, mas pode modificar
const pessoa = { 
    nome: 'Juliana', idade: 35 
};

Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
pessoa.idade = 38; // Modificações funcionam normalmente
pessoa.batata = 'Frita'; // Não adiciona pois está selado
delete pessoa.nome; // Não funciona pois está selado
console.log(pessoa); 

// Object.freeze, junta o (Object.preventExtensions()) e o (Object.seal()) e ainda 
// Não permite modificar os valores do objeto deixando-o constante

const casa = {
    objeto: 'cadeira',
    valor: 220000,
    cor: 'azul'
}
Object.freeze(casa);
casa.objeto = 'batata'; // Não
casa.cozinha = 'Bonita'; // Não
delete casa.cor; // Não
console.log(casa, Object.isFrozen(casa));
console.log('Está congelado??', Object.isFrozen(casa) ? 'Sim' : 'Não');