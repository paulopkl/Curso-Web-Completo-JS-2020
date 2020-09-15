function batatinha(nota){
        if(nota >= 7){
            console.log("Aprovado")
        } else {
            console.log("Reprovado")
        }
}

batatinha(10);
batatinha(4);
batatinha("epaaaa!!"); // Cuidado por ser fracamente tipáda
console.log(typeof("epaaaa!!!"));