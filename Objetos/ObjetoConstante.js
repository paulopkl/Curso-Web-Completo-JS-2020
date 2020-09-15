// Pessoa --> 123 --> {...} enderço de memória '123'
const pessoa = { nome: 'Ana' };
pessoa.nome = 'Pedro';// A constante continua apontando para 123 mas o dado mudou 
console.log(pessoa);

// pessoa <-- 456 --> {...} 
// pessoa = { nome: 'Ana' }; // Não pode por que é constante
Object.freeze(pessoa);// Não pode mais incluir atributos, excluir atributos ou modificar atributos no objetos,
pessoa.nome = 'Maria'; // Agora não é mais possivel atribuir novos valores para esse objeto
pessoa.nome = 'Batatias';
pessoa.end = "Rua ABCD";
console.log(pessoa);
const pessoaConstante = Object.freeze({ 'idade em anos!': 18 });
console.log(pessoaConstante);
pessoaConstante['idade em anos!'] = 24;
console.log(pessoaConstante);