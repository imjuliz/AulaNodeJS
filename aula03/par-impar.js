
const readline = require('readline-sync');
let n = Number(readline.question("Digite um numero: \n"));

// se a variavel "n" NAO for um numero, escreva "numero invalido", senao, se o resto da divisao de "n" por 2 der 0, escreva "par", senao, escreva "impar"
(!(!isNaN(n))) ? console.log('numero invalido') : 
n % 2 === 0 ? console.log(n, 'é um numero par') :
console.log(n, 'é um numero impar')