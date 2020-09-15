function imprimirRandom(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do {
    opcao = imprimirRandom(-2, 15);
    console.log('O valor é', opcao);
}
while (opcao != -1);
