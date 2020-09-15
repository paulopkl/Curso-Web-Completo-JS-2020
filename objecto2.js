const saudacao = 'Opa'; // Contexto Léxico

function exec(){
    const saudacao = 'Falaa';
    return saudacao;
}

console.log(exec());

const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: "Rua",
        numero: 123
    }
}

console.log(cliente.endereço.numero);
