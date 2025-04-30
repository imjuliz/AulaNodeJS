const readline = require('readline-sync');
const base = Number(readline.question('Digite um numero inteiro positivo para a base:\n'));
const expoente = Number(readline.question('Digite um numero inteiro positivo para o expoente:\n'));

function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

console.log(`A potência de ${base} elevado a ${expoente} é:`, calcularPotencia(base, expoente));