function getPreco(imposto = 0, moeda = 'R$ '){
    return (
 `${moeda} ${this.preco/*eu injeto pelos objetos*/ *
     (1 - this.desc/* é injetado pelos objetos */) * 
     (1 + imposto)}`
    );
}

const Produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
} 

global.preco = 20; global.desc = 0.1;
console.log(getPreco()); // 18
console.log(Produto.getPreco()); // 3900.65

const carro = { preco: 49990, desc: 0.2 }; 
console.log(getPreco.call(carro)); // 39992
console.log(getPreco.apply(carro)); // 39992

console.log(getPreco.call(Produto)); // 3900.65
console.log(getPreco.call(carro, 0.17, '$')); // $ 
console.log(getPreco.apply(carro, [0.17, '$'])); // primeiro o Objeto para usar como contexto
// e depois um array com todos os parâmetros para chamada na função
console.log(getPreco.apply(global, [0.17, 'US$'])); 