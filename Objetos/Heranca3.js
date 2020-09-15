const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'  
};

const filha1 = Object.create(pai); // filha1 tem o pai como prototypo
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } // não pode ser rescrito o valor nem enumerado nos keys
});
filha2.nome = 'Rounaldu';
filha2.nome = 'Não adianta tentar reescrever';
console.log(filha2);
console.log(filha2.nome);

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

// console.log(Object.keys(filha1));
// console.log(Object.keys(filha2));
// console.log(Object.keys(pai));

for(let key in filha2){
    // hasOwnProperty é uma forma de descobrir se determinado atributo pertence ao objeto ou se vem por herança
    if(filha2.hasOwnProperty(key) == true){ 
        console.log('é da propria variavel:',key);
    } else {
        console.log(`Por herança: ${key}`);
    }
};
