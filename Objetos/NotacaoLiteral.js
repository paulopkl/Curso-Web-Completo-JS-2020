// Notação Literal
const a = 1;
const b = 2;
const c = 3;
 
const obj1 = { a: a, b: b, c: c}; // Sem EcmaScript
const obj2 = { a, b, c: 4 }; // Com EcmaScript
console.log(obj2, c);

const nomeAttr = 'Nota';
const ValorAttr = 7.87;

const obj3 = {};
obj3.nomeAttr = ValorAttr;
obj3[nomeAttr] = Math.floor(ValorAttr+1);
console.log(obj3);

const obj4 = { nomeAttr: ValorAttr };
console.log(obj4);

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2(){ // EcmaScript2015
        // ...
    }
}

console.log(obj5);