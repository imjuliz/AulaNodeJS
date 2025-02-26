const readline = require('readline-sync');
const idade = Number(readline.question('Qual a sua idade? '));

/* uma forma de fazer
// se a idade for maior ou igual a 18, escreva maior, senao, escreva menor
(idade >= 18) ? console.log('Maior') : console.log('Menor');
*/

const result = (idade >= 18) ? 'Maior' : 'Menor';
console.log(result)