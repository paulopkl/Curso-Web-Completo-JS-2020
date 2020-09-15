for(let letra of "Cod3r"){ // Ele executa 'letra' por 'letra'
    console.log("A letra é", letra.toUpperCase());
};

const assuntosEcma = ['Map', 'Set', 'Promise'];

for(let i in assuntosEcma){
    console.log(i);
}

for(let i in assuntosEcma){
    console.log(assuntosEcma[i] + ', ');
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
]);

for(let assunto of assuntosMap){
    console.log(assunto);
}

for(let chave of assuntosMap.keys()){

}