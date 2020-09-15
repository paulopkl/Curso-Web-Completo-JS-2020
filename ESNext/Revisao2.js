// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(5, 5));

// Arrow Function (this)
const lexico1 = () => { return(console.log( this === exports )); };
lexico1();

const lexico2 = lexico1.bind({}); // o THIS aponta para um objeto
lexico1();
lexico2();

// parametros default 
function log(text = 'Node') { // Caso seja undefined ele assume 'Node'
    console.log(text);
}

log(  );
log("sou mais forte");

// Operador Rest Junta tudo em uma estrutura
function total(...numeros) {
    let total = 0;
    numeros.forEach( (n) => { return( total += n ); });
    return(total);
}

console.log(total(2, 10, 30, 55, 85, 1002, 3030, 5555));