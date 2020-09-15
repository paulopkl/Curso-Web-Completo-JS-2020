const filhas = ['Ualeska', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos);
const todosMaisFulano = filhas.concat(filhos, 'Fulano');
console.log(todosMaisFulano, todos, filhas, filhos);

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));