const readline = require('readline-sync');

const dados= readline.question('informe seu nome, telefone e e-mail: \n').split(' ');

console.log('Nome: ', dados[0]);
console.log('Fone: ', dados[1]);
console.log('Mail: ', dados[2]);