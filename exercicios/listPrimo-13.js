const readline = require('readline-sync');
const quantidade = parseInt(readline.question('Digite um numero inteiro para quantidade de primos: '));
if (isNaN(quantidade) || quantidade <= 0) {
    console.log('Numero invalido.');
} else {
    let primos = [];
    let numero = 2; 
    while (primos.length < quantidade) {
        let ehPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            primos.push(numero);
        }
        numero++;
    }
    console.log(`Os primeiros ${quantidade} numeros primos sao: ${primos.join(', ')}`);
}