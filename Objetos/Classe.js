class Conta {
    constructor(nome, nmr1, nmr2){// é a função chamada no momento que a classe for instanciada
        this.nome = nome;
        this.nmr1 = nmr1;
        this.nmr2 = nmr2;
    };

    EscolhaUmaOperacao(operador){
        switch(operador){
            case('soma'): { 
                console.log(`caro senhor ${this.nome} a soma é ${this.nmr1 + this.nmr2}`);
                break;
            };
            case('subtracao'): {
                console.log(`caro senhor ${this.nome} a subtração é ${this.nmr1 - this.nmr2}`);
                break;
            };
            case('divisao'): {
                console.log(`caro senhor ${this.nome} a divisão é ${this.nmr1 / this.nmr2}`);
                break;
            };
            case('multiplicacao'): {
                console.log(`caro senhor ${this.nome} a multiplicação é ${this.nmr1 * this.nmr2}`);
                break;
            };
            default: {
                console.log(`Opaaa! ${this.nome}!, digite soma, subtracao, divisao ou multiplicacao`);
            };
        };
    };
};

let teste = new Conta('Paulo', 25, 5);

teste.EscolhaUmaOperacao('multiplicacao');

class Lançamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    };
};

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lançamentos = [];
    };
    addLancamentos(...lançamentos){ 
        lançamentos.forEach((l) => this.lançamentos.push(l)); // Vou adicionar tudo no array lançamentos
    };
    sumario(){
        let ValorConsolidado = 0;
        this.lançamentos.forEach(l => { // para cada item no array vai somar 
            ValorConsolidado += l.valor
        });
        return ValorConsolidado;
    };
};

const salario = new Lançamento('Salario', 45000);
const contaDeLuz = new Lançamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());