// Coleção dinamica de pares Chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
console.log(produto['marca do produto']);
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietário: {
        nome: 'Raul',
        idade: 56,
        endereco: { // Objeto dentro de Objeto e dentro de Objeto
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{ // Array de Objetos
        nome: 'Junior',
        idade: 19
    }, { 
        nome: 'Ana',
        idade: 42
    }],
    CalcularValorSeguro: function (){ // Funções dentro de um objeto
        // ...
    }
}
carro.proprietário.endereco.numero = 1000;
carro['proprietário']['endereco']['logradouro'] = 'Av Gigante';

console.log(carro);

// delete carro.condutores;

console.log(carro);

delete carro.proprietário.endereco;

delete carro.CalcularValorSeguro;

console.log(carro);
console.log(carro.condutores.length);