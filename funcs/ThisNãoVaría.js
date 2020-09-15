const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falardepessoa = pessoa.falar.bind(pessoa);
falardepessoa();

let falar2 = pessoa.falar; // o this aqui está referenciando o falar2
falar2();

falar2 = pessoa.falar.bind(pessoa); // o this aqui está amarrado e referenciando o objeto pessoa.saudacao
falar2();
