const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// Factory simples: retorna sempre um Objeto, sem o operador new
function CriarPessoa(){
    return {
        nome: 'Ana',
        Sobrenome: 'Silva'
    }
}

console.log(CriarPessoa().batata);

function CriarProduto(idnome, nomeNome, nomepreco){
    return {
        id: idnome,
        nome: nomeNome,
        preco: nomepreco,
        Valor: 29.99
    }
}

console.log(CriarProduto(1, 'Nike', 35.99));

function  Criacao(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(Criacao('Notebook', 2199.49));
console.log(Criacao('Computador Gamer', 2989.99));