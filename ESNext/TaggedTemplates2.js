function real(partes, ...param){
    const resultado = []; // Criou um Array vazio
    param.forEach( (valor, indice) => { // para cada elemento de param pegue valor e indice
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`; // se o valor for um numero transforme em R$ valor fixado em 2 casas decimais
        resultado.push(partes[indice], valor) // Adicione tudo no Array 
    });
    return(resultado.join('')); // Junte 
}

const preco = 29.9;
const precoParcela = 11;
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`);