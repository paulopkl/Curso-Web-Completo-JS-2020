let calc = 1;
for(let i = 0; i < 110; i += 5 ){
    calc += 5;
    console.log(calc);
    if(i == )
    if(i >= 35){
        continue;
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in nums){
    console.log(nums[x]);
        if(x == 5){
            break;
        }
        if(x == 8){
            continue;
        }
}

for(y in nums){
    if(y >= 3 && y <=5){
        continue // quebrou aqui e tacou para continuar para cima sempre que chegar no continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//////              RÓTULOSSSSSS //////////////////////////////


externo: 
for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3) break externo // o break não age mais sobre o laço interno mas sobre o externo 
            console.log(`A = ${a} e B = ${b}`)
    }
}
