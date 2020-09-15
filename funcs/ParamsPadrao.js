// Estratégia para valor padrão em uma função
function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;

}

console.log(soma1(), soma1(3), soma1(1, 2, 3));
console.log(soma1(0, 0));

// Outra estratégia
function soma2(a, b, c){
    a = a !== undefined ? a : 1; // se A for diferente de undefined retorne A, Se não. 1.
    b = 1 in arguments ? b : 1; // se tiver o B (o indíce 1) no parametro B retorne B, Se não. 1.
    c = isNaN(c) ? 1 : c; // se C não for um numero retorne 1, Se não. C é C.
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 3, 2), soma2(0, 0, 0));
console.log(soma2(2, 5, "batata"));

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));

