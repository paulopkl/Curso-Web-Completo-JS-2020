let casa = ["Carro", "Mesa", "Cadeira", "Quartos", "Televisão", "Janela"];
let x = 10;
for(x in casa){
        console.log(x+` = ${casa[x]}`)
}

console.log(' ');

for(let x = 1; x < casa.length; x++){
    console.log(`${x} elemento = ${casa[x]}`)
}

console.log(" ")

let mãos = function (arg){
    let dedos = 0;
    for(let mão = 1; mão < arg + 1; mão++){
        dedos += 5; 
        switch(mão){
            case 1:{
                console.log(`são ${mão} mão = ${dedos} dedos`);
                continue;
            }
            default:{
                console.log(`são ${mão} mãos = ${dedos} dedos`);
            }
        }
    }
}

mãos(17);