/*
//ordenação lexica
const notas = [10, 7, 4, 9];
console.log(notas);

notas.sort();
console.log(notas);
*/

// ordenação crescente
const notas = [10, 7, 4, 9];
console.log(notas);

notas.sort((a,b) => a-b);
console.log(notas);