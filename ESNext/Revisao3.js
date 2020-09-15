// ES8: Object.values / Object.entries
/*
    .keys() pega todas as chaves daquele objto
*/
const obj = { a: 1, b: 2, c: 3 };
const valores = Object.values(obj);
const chaves = Object.keys(obj);
console.log('Chaves: ', chaves);
console.log('Valores: ', valores);

// Melhorias na Notação Literal
const nome = "Carla";
const pessoa = {
    nome,
    ola() {
        return("01 G3NT3");
    },
}

console.log(pessoa.nome, pessoa.ola());

// Classe 
class Animal {
    hello() {
        return('Hello World!!');
    }
};
class Cachorro extends Animal {
    falar() {
        return('Ola');
    }
} 

console.log(new Cachorro().hello());
