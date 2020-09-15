Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim // o primeiro parametro verifica se o numero é maior ou igual
} // o segundo parametro verifica se o numero é menor ou igual, caso não retorna false para o if

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra');
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação');
    } else if(nota.entre(0, 3.99)){
        console.log("reprovado");
    } else {
        console.log("Nota invalida");
    }
}

imprimirResultado(10);
imprimirResultado(9);
imprimirResultado(8);
imprimirResultado(7);
imprimirResultado(6);
imprimirResultado(5);
imprimirResultado(4);
imprimirResultado(3);
imprimirResultado(2);
imprimirResultado(1);
imprimirResultado(0);
imprimirResultado(-1);
imprimirResultado("Queijooo!!");





