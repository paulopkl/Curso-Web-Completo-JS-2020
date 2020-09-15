const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

function result(nota) {
    if(nota >= 7){
        return 'Aprovado';
    }else{
        return 'Reprovado';
    }
}


console.log(resultado(7.1));