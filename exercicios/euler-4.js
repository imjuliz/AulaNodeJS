const readline = require('readline-sync');
const valorInicial = parseInt(readline.question('Digite um número inteiro positivo maior que zero: '));
if (isNaN(valorInicial) || valorInicial <= 0) {
    console.log('Numero invalido');
} else{
    const numeroEuler = (1 + 1 / valorInicial) ** valorInicial;
    console.log(`O número de Euler calculado a partir de ${valorInicial} é aproximadamente: ${numeroEuler.toFixed(5)}`);
}