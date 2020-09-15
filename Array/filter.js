const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return p.preco > 2500; // imprima produtos.preco que forem maior que 2500
    // return false; // nenhum elemento passa, nao retorna nada
}))

const caro = produto => produto.preco >= 500;
const fragil = x => x.fragil == true;

console.log(produtos.filter(function(x){
    return(fragil(x) && caro(x));
}))

console.log(produtos.filter(fragil).filter(caro));