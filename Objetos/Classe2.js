class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    };
};

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome); // O super passa o sobrenome pro constructor do Avo
        this.profissao = profissao; // Por padrão se não for setado, vira professor
    };
};

class Filho extends Pai {
    constructor(){
        super('Silva'); // Passou 'Silva' pro constructor do Pai
    };
};

const filho = new Filho; // O objeto instanciado a partir de Filho é armazenado nessa constante
console.log(filho);