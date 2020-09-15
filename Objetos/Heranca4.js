function MeuObjeto(){  }
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function(nome){
    console.log(`Bom dia meu nome é ${this.nome}!`);
}; 
console.log(MeuObjeto.prototype); MeuObjeto.prototype.falar();
console.log(obj1.nome); // Anônimo
obj2.falar();
let obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // O __proto__ que aponta para um objeto pai é igual
// á mesma coisa que MeuObjeto.prototype
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// (new MeuObjeto) ==> (MeuObjeto.prototype) ==> (Object.prototype) == null
// (new MeuObjeto.__proto__) => (Function.prototype) ==> (Objecto.prototype) ==> null