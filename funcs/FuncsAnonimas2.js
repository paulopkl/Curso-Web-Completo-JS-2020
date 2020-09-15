const soma = function (x, y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma){
    return console.log(operacao(a, b));
}   

imprimirResultado(5, 5);
imprimirResultado(5, 5, soma);
imprimirResultado(10, 5, function(x, y){ return x - y; });
imprimirResultado(10, 3, (e, f) => { return e - f; });

const pessoa = {
    falar: function (){
        console.log("Olá mundo");
    },
    falar1() {
        console.log('opa!!');
    }
}

pessoa.falar();

console.log(pessoa);