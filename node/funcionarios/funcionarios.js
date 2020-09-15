const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = (f) => { return (f.pais === 'China') };
const mulheres = (f) => { return (f.genero === 'F') }; 

const menorSalario = (func, funcAtual) => {
    return ( 
        func.salario < funcAtual.salario ? func : funcAtual
    )
}

const dados = axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func);
});