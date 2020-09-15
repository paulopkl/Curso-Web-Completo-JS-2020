// IIFE => Immediately Invoked Function Expression

(function (){
    console.log('Será executado na hora que a função foi declarada!!');
    console.log('Foge do escopo global!');
})() /* Ela é executada automaticamente ao iniciar a rodar o código
E tambem não toca no escopo global não causando mais problemas com o |this.|  */