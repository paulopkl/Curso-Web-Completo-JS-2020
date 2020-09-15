const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']; // não se pode atribuir mais nada a essa constante

pilotos.pop(); // Remove o ultimo elemento
console.log(pilotos);

pilotos.push('Vertente'); // Adiciona ultimo elemento
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento!!!
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona como primeiro elemento
console.log(pilotos);

// Splice pode adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Splice pode remover elementos
pilotos.splice(3, 3); // simplesmente removeu
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // Novo Array sem os 2 primeiros elementos
console.log(algunsPilotos); 

const algunsPilotos2 = pilotos.slice(1, 4); // Ele gera um novo array. A partir dos indices indicados
// pega a partir do indice 1 até o 3 já que o 4 não vai entrar

