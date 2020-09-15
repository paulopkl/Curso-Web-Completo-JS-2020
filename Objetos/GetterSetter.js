const sequencia = { 
 _Valor: 1, /* Convenção, informa aos Devs que essa é uma variavel
   para uso interno, no bloco desse objeto. Mas não há restrição nenhuma */
   get valor(){  
       return (this._Valor++);  
    },  // Get é uma função
   set valor(valor){  
       if(valor > this._Valor) {
           this._Valor = valor;
        }  
    } // o this. Torna publico
};

console.log(sequencia.valor, sequencia.valor); /* O ".valor" internamente chama o método Get e 
o Método Set retornando 1 no primeiro momento e fazendo o autoinclemento para quando for chamado mais
vezes, adicionar sempre 1 a mais */

sequencia.valor; // 3
sequencia.valor; // 4
console.log(sequencia.valor); // 5

sequencia.valor = 1000;
console.log(sequencia.valor);
console.log(sequencia.valor);
console.log(sequencia.valor);
sequencia.valor = 500; // Ele não aceita valores menores
console.log(sequencia.valor);