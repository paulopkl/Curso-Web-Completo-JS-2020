function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const marterSaudavel = !comprarSorvete; // operador unário

    return { 
        comprarSorvete: comprarSorvete, 
        comprarTv50: comprarTv50, 
        comprarTv32: comprarTv32, 
        marterSaudavel: marterSaudavel
    };
}

console.log(compras(1 === 1, 2 === 2));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false))