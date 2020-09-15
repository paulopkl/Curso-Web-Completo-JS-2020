function salvar(req, res) {
    res.send('Função POST chamada, usando o obter dentro da pasta api');
}

function obter(req, res) {
    res.send('Função GET chamada, usando o obter dentro da pasta api');
}


module.exports = { salvar: salvar, obter: obter };