/*
// programa que gera tabuada
const readline = require('readline-sync');
const num = Number(readline.question('Digite um numero: '));

for(let i = 0; i<=10; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}
*/

// programa que faz a sequencia {-1, 2, 5, 8, 11}
for(let i = -1; i<=11; i= i+3 /* ou i += 3 */){
    console.log(`${i}`);
}

