const readline = require('readline-sync');
const quantidade = parseInt(readline.question('Quantos numeros da serie Fibonacci deseja exibir? '));

if (isNaN(quantidade) || quantidade <= 0) {
    console.log('Numero invalido!');
} else {
    let fibonacci = [0, 1];
    console.log(fibonacci[0]);
    if (quantidade > 1) console.log(fibonacci[1]);

    for (let i = 2; i < quantidade; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        console.log(fibonacci[i]);
        if (i % 2 !== 0) console.log('Phi ** 1.618 **');
    }
}
