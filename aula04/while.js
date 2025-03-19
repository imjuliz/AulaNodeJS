const readline = require('readline-sync');

/*
const num = Number(readline.question('Digite um numero: '));
let i = 0;

// (teste logico/condição a ser avaliada {bloco de instruções a serem realizadas enquanto a condição ser verdadeira})
while(i <= 10){
    console.log(`${num} X ${i} = ${num * i}`);
    i++;
}
*/

let num;
// programa que solicita ao usuario digitar um numero de 0 a 10
while(true){
    num= Number(readline.question('numero maior ou igual a 0: '))
    if(num >=0){
        break
    }
}

console.log(num **2)