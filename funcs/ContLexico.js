const Valor = 'Global';

function minhaFuncao(){
   // const Valor = "Batata";
        return Valor;
}

function outraFuncao(){
    const Valor = "Batata"; // não funciona
    return minhaFuncao();
}

console.log(outraFuncao());