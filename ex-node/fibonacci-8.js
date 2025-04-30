const readline = require('readline-sync');
const quantidade = parseInt(readline.question('Quantos numeros da serie Fibonacci deseja exibir? '));
if (isNaN(quantidade) || quantidade <= 0) {
    console.log('Numero invalido!');
} else {
    let fibonacci = [];

    if (quantidade === 1) {
        fibonacci.push(0);
    } else {
        fibonacci = [0, 1];
        for (let i = 2; i < quantidade; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }
    console.log('Serie Fibonacci: ' + fibonacci.join(', '));
}