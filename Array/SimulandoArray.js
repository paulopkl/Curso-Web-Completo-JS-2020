// O intituito desta Aula foi mostrar como acessar um Objeto parecendo com uma array
// ou seja acessando pelos [] 
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }

console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function (){
        return Object.values(this);
    },
    enumerable: false
});

console.log(quaseArray[0]);

const MeuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), ',',MeuArray);