// Closures é o escopo criado quando a função é declarada
// Este escopo permite a função acessar e manipular variavéis externas à função

// Contexto Lexico em ação

const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro() {
        return x
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());