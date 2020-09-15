const fs = require('fs');

const caminho = __dirname + '/arquivo.json'; // (diretório atual) + /arquivo.json || C://users/paulo/desktop/projeto/javascript/node/arquivos.json

// sincrono...
const conteudo = fs.readFileSync(__dirname + '/arquivo.json', 'utf-8');
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (x, y) => {
    const config = JSON.parse(y);
    console.log(`host -> ${config.db.host} : porta -> ${config.db.port}`);
});

const config = require('./arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (erro, arquivos) => { // __dirname é uma constante que representa o diretório atual 
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
});