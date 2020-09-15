const prod1 = {"":""};

prod1['nome'] = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1['Desconto Legalzão'] = 0.4;

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

let JSON = '{ "nome": "batata", "preco": 80}';

console.log(prod2.obj.obj);

console.log(JSON);