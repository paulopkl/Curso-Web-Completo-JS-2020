module.exports = function Saudacao(nome) { // Função que retorna uma função MIDDLEWARE
    return function(req, res, next) {
        console.log(`Seja bem vindo! ${nome}.`);
        next();
    }
}