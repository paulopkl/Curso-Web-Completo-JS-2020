function soboanoticia(nota){
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

function IfItsTrue(valor){
   if(valor){
       console.log('é verdade... ' + valor);
   }
}    

soboanoticia(7.1);
IfItsTrue(null);
IfItsTrue(undefined);
IfItsTrue(NaN);
IfItsTrue('');
IfItsTrue(0);
IfItsTrue(-1);
IfItsTrue(' ');
IfItsTrue('?');
IfItsTrue([]);
IfItsTrue([1, "batata"]);
IfItsTrue({});
IfItsTrue({ nome: "paulo"});

function teste1(num){
    if (num >= 7) {
        console.log(num);
    }
    console.log('Final');
}

teste1(6);
teste1(8);

function teste2(num){
        if(num > 7); { // o if não executa nada
            console.log(num);
        }
}

teste2(6);
teste2(8);