// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com Objeto
const funcionario = { nome: 'Maria', salario: 12348.99 };

const clone = { ativo: true, ...funcionario } // espalha todos os elementos de um objeto no outro
console.log(clone);

// usar spread com Array
const funcs = ['batatas', 'batatias', 'batatoes'];
const clones = ['Teste', ...funcs]; // espalha os elementos de um array no outro
console.log(clones);