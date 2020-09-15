let pri = "A vida é tão";
let meiro = " Bela!!!"


function imprimirSoma(a, b){
    console.log(a+b);
};

// Função sem retorno
imprimirSoma(pri,meiro);
imprimirSoma(2);
imprimirSoma(1, 3, 5, 7, 9, 11);
imprimirSoma();

// Função com retorno
function soma10(a, b = 10){
    return a + b;
}

console.log(soma10(9));


////////////////////////////   Aula 2   /////////////////////////////////////////////////////

const imprimirSum = function (a, b){
        console.log(a+b);
}

imprimirSum(2,3)

const Sum = (a, b) => {
    return a + b;
}

console.log(Sum(2,3));

const subtracao = (a, b) => console.log(a-b);

subtracao(8,5);

const mais2 = a => a + 2;

console.log(mais2(3));