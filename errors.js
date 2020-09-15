function tratarErroELancar(erro){ // funcão chamanda no catch
    // throw new Error('erro de processamento');
    // throw 10;
    // throw false;
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date,
        id: erro.id
    }
}

function ImprimirNomeGritado(obj) {
    try { // Esee try tenta rodar o código abaixo e taca pro catch se der erro
    console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) { // catch roda se der algum erro
        tratarErroELancar(e)
    } finally { // roda ao final da execução do tratamento do erro ou sem erro
        console.log('Final');
    }
}

const obj = { nome: 'Roberto' }
ImprimirNomeGritado(obj); // taca a variavel obj no parametro