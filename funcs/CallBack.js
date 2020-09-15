let fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(x, y){
    console.log(` ${y + 1}. ${x}`)
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function (x){
    console.log(x);
});