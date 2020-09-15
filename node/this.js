console.log('this === global: ',this === global);
console.log('this === module: ',this === module);

console.log('this === module.exports: ', this === module.exports);
console.log('this === exports: ',this === exports);

function logThis(){
    console.log('Dentro de uma função!!!');
    console.log('this === exports: ',this === exports);
    console.log('this === module.exports: ',this === module.exports);

   // this.perigo = '...'; aponta para a função.perigo
}
logThis();

const btt = {
    trust: this === module.exports
}

console.log('this === module.exports dentro de um objeto: ', btt.trust);