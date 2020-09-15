const ModuloA = require('./moduloA');

console.log(ModuloA.escola);
console.log(ModuloA.nome);
console.log(ModuloA);

// prototype importado
console.log(ModuloA.teste);

module.exports = {
    func(){
        return("Hello Friend");
    }
}