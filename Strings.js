const escola = "Cod3r";
let comida = "batatinha com arroz";

console.log(escola.charAt(3));
console.log(escola.charAt(4));
console.log(escola.charCodeAt(4));
console.log(escola.indexOf('r'));
console.log(typeof(escola));

console.log(escola.substring(2));
console.log(escola.substring(0,3));

console.log(comida.concat(` ${escola}`).concat(' !! '));
console.log(comida + ' ' + escola + ' !! ');

console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));