function Carro(VelocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let VelocidadeAtual = 0; // let é uma variavel dessa função

    // Método publico ou seja o this. permite acessar essa função fora da função Carro.
    this.acelerar = function (){
        if (VelocidadeAtual + delta <=  VelocidadeMaxima){
            VelocidadeAtual += delta;
        } else {
            VelocidadeAtual = VelocidadeMaxima;
        }
    }

    // Método publico ou seja o this transformou em um objeto.
    this.getVelocidadeAtual = function (){
        return VelocidadeAtual;
    }

    console.log(this);
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
console.log(typeof Carro);
console.log(typeof ferrari);