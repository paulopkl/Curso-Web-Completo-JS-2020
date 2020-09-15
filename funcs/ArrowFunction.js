let dobro = (a) => { return 2 * a };
let vezes = (a, b) => { return a * b };

let triplo = a => console.log(3 * a);
let metade = a => a/2;

triplo(3);
console.log(vezes(4, 5));
console.log(metade(Math.PI));

let grita = a => a.toUpperCase();
console.log(grita('haaaaaaaaaa'));

let ola = function(){
    return 'Olá!!!';
}

ola = () => 'Olá!';
ola = _ => 'Olá!'; // Possui um parâmetro 
console.log(ola());