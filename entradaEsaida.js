const anonimo = process.argv.indexOf('-a') !== -1;
// console.log(anonimo);

if(anonimo){ // se Anonimo for TRUE
    process.stdout.write('Fala Anônimo!\n');
    process.exit();
} else {
    process.stdout.write('Informe seu nome: ');
    process.stdin.on('data', (data) => { // Esse evento ocorre quando o usuário aperta ENTER
        const nome = data.toString().replace('\n', '');

        process.stdout.write('Fala ' + nome + '   !!\n');
        process.exit(); // Mata o processo
    });
}
