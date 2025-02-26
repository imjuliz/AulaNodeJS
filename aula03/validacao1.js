const readline = require('readline-sync');
const idade = Number(readline.question('Qual a sua idade? '));

//validação
if (isNaN(idade)) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade')
    }
} else {
    console.log('Idade invalida')
}