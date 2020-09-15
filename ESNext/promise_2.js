// setTimeout(function() {
//     console.log('Executando Callback!!');

//     setTimeout(function() {
//         console.log('Executando Callback!!');

//         setTimeout(function() {
//             console.log('Executando Callback!!');
//         }, 2000);

//     }, 2000);

// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promise...');
            resolve('Vishhh')
        }, tempo);
    });
}

// esperarPor(3000)
//     .then(txt => txt.toUpperCase())
//     .then(texto => console.log(texto));

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
