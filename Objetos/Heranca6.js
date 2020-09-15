function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
};

const aula1 = new Aula('Bem vindo', 123); // Alem de criar o objeto, o prototypo aponta para a função
const aula2 = new Aula('Até breve', 456);
console.log(aula1, aula2);

Aula.prototype.protos = 'bertold';
console.log(aula1.protos, aula2.protos);

// Simulando o new
function novo(f, ...params){ // Esse ...params taca os 2 proximos parametros na função 'f'
    const obj = {};
    obj.__proto__ = f.prototype; // obj.__proto__ = Aula.prototype
    f.apply(obj, params); // Aula().apply
    return obj;
};

const aula3 = novo(Aula, 'Tem testindo', 123);
console.log(aula3.nome);
const aula4 = novo(Aula, 'Abé tréve', 456)
aula4.__proto__.videoID = 999;
console.log(aula4.nome, aula4.videoID);