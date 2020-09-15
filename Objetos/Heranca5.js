console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
console.log(typeof typeof typeof Function);

String.prototype.reverse = function (){
    return this.split('').reverse().join('');
};

console.log('Escola Cooder'.reverse());

Array.prototype.first = function (){
    return this[0];
};
let batatias = ['Batata', "Maçã"];
console.log(batatias.first());

console.log([1,2,3,4,5].reverse(), [1,2,3,4,5].reverse().first());

String.prototype.toString = function (){ // Agora toda string é convertida em 'lascou tudo'
    return 'Lascou tudo';
}

console.log('Escola Cod3r'.reverse(), 'batatias'.reverse());