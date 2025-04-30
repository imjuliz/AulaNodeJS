const readline = require('readline-sync');

// Solicita um número inteiro positivo maior que zero
const valorInicial = parseInt(readline.question('Digite um numero inteiro positivo maior que zero: '));

if (isNaN(valorInicial) || valorInicial <= 0) {
    console.log('Numero inválido.');
} else {
    // Solicita quantas vezes o usuário quer repetir o cálculo
    const repeticoes = parseInt(readline.question('Quantas vezes deseja repetir o cálculo? '));
    
    if (isNaN(repeticoes) || repeticoes <= 0) {
        console.log('Numero de repetições inválido.');
    } else {
        let valorAtual = valorInicial;
        for (let i = 0; i < repeticoes; i++) {
            const numeroEuler = (1 + 1 / valorAtual) ** valorAtual;
            console.log(`O numero de Euler calculado a partir de ${valorAtual} é aproximadamente: ${numeroEuler.toFixed(5)}`);
            // Incrementa o valor para a próxima iteração
            valorAtual++;
        }
    }
}
