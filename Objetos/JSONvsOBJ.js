const obj = { 
    a: 1, 
    b: 'batata', 
    c: {
        d: 9
    }, 
    soma: function(){ 
        return(a + b + c) 
    }
};

console.log(JSON.stringify(obj)); // JSON é string então não existe funções
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); Não funciona
// console.log(JSON.parse("{ 'a': 1 , 'b': 2, 'c': 3 }")); Não funciona
console.log(JSON.parse('{"a": 1, "a.2": false, "b": "not ever use this", "c": { "a": "é 2?", "b": 3 }, "d": ["eeEEe", "eaeeeieeeHo"] }'));
console.log(JSON.parse(JSON.stringify(obj)));