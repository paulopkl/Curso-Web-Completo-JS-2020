const arr = ['Batata', 'Bta2', 'Ata3', 'bet4'];

Array.prototype['single'] = 'sis';

arr.forEach((nome, valor, este) => {
    console.log(nome, valor);
})

Array.prototype.forach2 = function (chama){
    for(let i = 0; i <= this.length; i++){
       chama(this[i], i, this) // é como se eu fisse || function (this[i], i, this){ clg(this[i], i, this) } ||
    } // O usuario tem a opção de escolher se ele quer só o this[i] ou os 2 ou os 3 parametros
}



arr.forach2(function (x, y, z){
    console.log(x, y, z);
});

console.log('  ');
console.log(Array.prototype);

Array.prototype.forach3 = function (){
    for(let i = 0; i <= this.length; i++){
       console.log(this[i], i, this) // é como se eu fisse || function (this[i], i, this){ clg(this[i]) } ||
    } // O usuario não tem essa opção
}

arr.forach3();