let ComparaComThis = function (param) {
    console.log(this === param);
}

let obj = {}

ComparaComThis(global); // true
ComparaComThis(obj); // false
ComparaComThis(this); // false

ComparaComThis = ComparaComThis.bind(obj); // amarrou o this apontando para objeto

ComparaComThis(global); // false
ComparaComThis(obj); // true

let ComparaComThisArrow = param => console.log(this === param); // arrow function

ComparaComThisArrow(global); // false
ComparaComThisArrow(module.exports); // true
ComparaComThisArrow(this); // true

ComparaComThisArrow = ComparaComThisArrow.bind(obj); // Não funciona

ComparaComThisArrow(obj); // false o bind não funfa em Arrrow Functions
ComparaComThisArrow(module.exports); // true