class Pessoa {
    constructor(nome){
       this.nome = nome; // Transformou a variavel nome em global sendo acessada por objeto
    }
        falar(){
            console.log(`Meu nome é ${this.nome}`);
        }
}

const p1 = new Pessoa('João');
p1.falar();
console.log(p1.nome)

const pessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const P1 = pessoa('Paulo');
P1.falar();
console.log(P1.nome)