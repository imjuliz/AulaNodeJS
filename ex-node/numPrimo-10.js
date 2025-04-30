const readline = require('readline-sync');
const numero = parseInt(readline.question('Digite um numero inteiro maior que 1: '));
if (isNaN(numero) || numero <= 1) {
    console.log('Numero invalido');
} else {
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        console.log(`${numero} é primo.`);
    } else {
        console.log(`${numero} não é primo.`);
    }
}