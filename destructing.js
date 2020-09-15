// ES2015 e ES6

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome,idade);

const { nome: n, idade: i} = pessoa;
console.log(n,i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); 

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);



///////////   Aula 2 Destructing com Array //////////////////////////////////////////////


const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [ 10, 7, 9, 8];

console.log(n1,n3,n5,n6);

const [ , [ ,nota]] = [[, 8, 9], [9, 6, 8]];

console.log(nota);



///////////   Aula 3 Destructing  /////////////////////////////////////////////////



function rand({ min = 0, max = 1000}) {
            const valor = Math.random() * (max - min) + min
            return Math.floor(valor);
};

console.log(rand({}));



///////////   Aula 4 Destructing  /////////////////////////////////////////////////



function rand([ min = 0, max = 1000 ]) {
    if(min > max){ 
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([40, 45]));
console.log(rand([800]));
console.log(rand([ ,15]));
console.log(rand([]));