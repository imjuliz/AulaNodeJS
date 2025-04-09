const readline = require('readline-sync');
const num = Number(readline.question('Digite um numero positivo maior que 1:\n'));
const formula = (num % 2 !== 0)
let divisores;

if (!isNaN(num) && num >1) {
    if (formula) {
        console.log(`${num} é numero impar`);
    } else if(!formula){
        console.log(`${num} é um numero par e é divisivel por ${divisores}[...]`)
    }
} else {
    console.log('numero invalido')
}
