// Usando notação Literal
const obj1 = {};
console.log(obj1);

// Objeto em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome; // Torna esta variável nome publica, não está encapsulada. Ela agora é acessivel
    // pelo escopo global
    Dobro = () => { // Está função não possui o this. portanto não é acessivel pelo objeto
        // Usando o 'let ... = new Produto();'
        console.log(2 * preco)
    }
    this.ValorDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new Produto('Caneta', 7.99, 0.15); // Agora p1 é um Objeto
const p2 = new Produto('Notebook', 2998.99, 0.25);

console.log(p1);
console.log(p2.ValorDesconto(), p1.ValorDesconto());
p1.nome = "Doflamingo";// Pode alterar o nome por que é publico, ou seja tem o this.
// p1.preco = 010101;    // fica indisponivel por que não tem o this
console.log(p1);

// Criando Objetos com Factory
function Obj(nome, endereco, x, y){
    return {
        nome,
        endereco,
        x,
        y,
        Multiplica(){
            return x * y;
        }
    }
}

let f1 = Obj('Paulo', 'Rua das Casas', 9, 11);
let f2 = Obj('Maria', 'Rua do Caceta', 9, 9);

console.log(f2.Multiplica());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Um função famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);