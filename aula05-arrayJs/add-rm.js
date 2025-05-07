// push - adiciona 1 elemento ao final do array

const notas = [10, 7, 4];
notas.push(-5);
notas.push(true);
notas.push('abc');

console.log(notas);

// splice (posição, acao, valor)
// 0 -> mantem o valor da posicao especificada
// 1 -> remove o valor da posição especificada 

notas.splice(1, 0, 88);

// pop - sempre remove o ultimo elemento do array
notas.pop();