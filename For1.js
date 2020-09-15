let contador = 1;
while (contador <= 10){
    console.log(contador);
        contador++;
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

const notas = [6.7, 7.4, 9.8, 6.1];

for(let i = 0; i < notas.length; i++){
    console.log(`O valor da nota é = ${notas[i]}` );
}

const comida = {
    tipo: "macarrão",
    quantidade: 5,
    id: 10
}

console.log(comida.length);