const readline = require('readline-sync');
const num = Number(readline.question("Digite um numero inteiro positivo: \n"));

if(!isNaN(num)){
    if (num < 0) {
        return;
    }
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
}
    console.log(`O fatorial de ${num} é: ${fatorial}`);
} else{
    console.log('numero invalido')
}