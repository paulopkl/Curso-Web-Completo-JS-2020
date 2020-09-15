const nums = [1, 2, 3, 4, 5];

// For com proposito
let resultado = nums.map(function(e){
    return (e * 3);
});
console.log(nums,'x3 =',resultado);

let soma10 = x => x + 10;
let triplo = x => x * 3;
let paraDinheiro = x => `R$ ${x.toFixed(2).replace('.', ',')}`;
let Varios = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(Varios);

console.log('  ');
console.log(parseFloat("3.14more non-digit characters"));