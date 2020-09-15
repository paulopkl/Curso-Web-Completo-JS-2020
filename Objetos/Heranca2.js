Object.prototype.attr0 = 'Z'; // O Object.prototype pofr inserir em todos os objetos mas não é listado
// Não faça isso acima em casa
const avo = {
    attr1: 'A' // agora ele procura no Object.prototype caso não haja nesse objeto
};
const pai = { 
    __proto__: avo, // agora ele procura no objeto avo caso não haja nesse objeto
    attr2: 'B',
    attr3: undefined
};
const filho = { 
    __proto__: pai, // agora ele procura no objeto pai caso não haja nesse objeto
    attr3: 'C'
};
const NadaVer = {  };

console.log(filho, filho.attr0, filho.attr1, filho.attr2, filho.attr3);
console.log(NadaVer, NadaVer.attr0);

const carro = {
    VelAtual: 0,
    VelMax: 220,
    acelerarMais(delta){
        (this.VelAtual + delta <= this.VelMax ) ? (this.VelAtual += delta) : (this.VelAtual = this.VelMax);
    },
    status(){
        return `${this.VelAtual}Km/h de ${this.VelMax}Km/h`;
    }
}

carro.acelerarMais(20);
carro.acelerarMais(20);
carro.acelerarMais(20);
// carro.acelerarMais(200);
console.log(carro.status());

const ferrari = { 
    modelo: 'F40',
    VelMax: 324 // Shadowning esse atributo Subscreve o outro
};

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`; // Está retornando todo o return de status() no objeto carro
    }
};

Object.setPrototypeOf(ferrari, carro); // carro agora é prototipo de ferrari
Object.setPrototypeOf(volvo, carro); // carro é prototipo de volvo
console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());
ferrari.acelerarMais(200);
console.log(volvo.status()); // O status de volvo está definido com 60 kms + 100 kms maximo de 220Km
console.log(ferrari.status()); // O status de ferrari está definido com 60 kms + 400 kms maximo de 324Km