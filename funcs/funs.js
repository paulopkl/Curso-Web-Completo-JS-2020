// Função na forma literal

function fun1() {  }

// Armazenar em uma variavel
const fun2 = function() {  }

// Função em array
const arr = [ function (a, b){ return a + b; }, fun1, fun2];
 console.log(arr[0](2, 3));


// Funções em atributos de objetos
const funções = {
    função1: function (a, b){
        return a + b;
    }, 
    função2: function (a, b, c){
        return (a + b) * c;
    }, 
    função3: function (a, b, c){
        return (a * b * c);
    }
}
console.log(funções.função2(5, 5, 5));


// Função dentro de Função
function run(fun){
    fun()
}

run(function (){ console.log("Executandoooo....")});

function soma(a, b){
    return function (c){
        console.log(a + b + c);
    }
}
soma(3, 4)(5);
const cincoMais = soma(3, 4);
cincoMais(5);