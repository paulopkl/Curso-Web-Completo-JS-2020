Array.prototype.filter2 = function(call){
        const newArr = [];
    for(let x = 0; x < this.length; x++){
        if(call(this[x], x, this)){
            newArr.push(this[x]);
        }
    }
    return newArr;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));