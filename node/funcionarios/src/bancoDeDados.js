const sequence = {
    _id: 1,
    get id() { return(this._id++) }
}

const produtos = {
    
}

const salvarProduto = (parametro) => {
    if(!parametro.id) parametro.id = sequence.id; // Se produto.id NÃO existir ENTÃO produto.id é a mesma coisa que sequence.id
    produtos[parametro.id] = parametro; // produtos.parametro.id é igual ao parametro que passei
    return(parametro); // retorna o objeto parametro
}

function getProduto(id) {
    return(produtos[id] || {}); // Retorne produtos.id ou um objeto vazio
}

function getProdutos() {
    return(Object.values(produtos));
}

function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return(produtos);
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }