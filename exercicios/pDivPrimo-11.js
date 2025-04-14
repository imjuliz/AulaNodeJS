const readline = require('readline-sync');
const numero = parseInt(readline.question('Digite um numero inteiro maior que 1: '));

if (isNaN(numero) || numero <= 1) {
    console.log('Numero invalido');
} else {
    let ehPrimo = true;
    let primeiroDivisor = null;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            primeiroDivisor = i;
            break;
        }
    }
    if (ehPrimo) {
        console.log(`${numero} é primo.`);
    } else {
        console.log(`${numero} nao é primo e é divisivel por ${primeiroDivisor}.`);
    }
}