function  getInteiroAleatório(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1){
    opcao = getInteiroAleatório(-1, 10)
    console.log('the value is ',opcao);
}