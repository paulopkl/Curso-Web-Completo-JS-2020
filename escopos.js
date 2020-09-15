let a = 123;

global.b = 456;
this.c = 789;
this.d = false;
this.e = "texto";

console.log(this.a);
console.log(global.a);
console.log(global.b);
console.log(module.exports === this);
console.log(module.exports.c);
console.log(module.exports);

// module.exports = { f: 789, g: false, h: 'texto' }
// variavel sem let ou var ou const vai pra global
abc = 3;

console.log(global.abc);