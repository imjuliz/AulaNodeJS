/* programa que verifica se a pessoa é maior ou menor de idade. porem com a condição de que a pessoa tenha entre 1 a 120 anos*/

// 1° forma
 /*
const readline = require('readline-sync');
let idade = Number(readline.question("Qual a sua idade?\n"))

if(idade >= 1 && idade <= 120 ){
{ 
    if(idade <18){
        console.log(`${idade} => menor de idade`);
    } else {
        console.log(`${idade} => maior de idade`);
    }
}
} else {
    console.log(`idade invalida`)
}
*/

// 2° forma

const readline = require('readline-sync');
let idade = Number(readline.question("Qual a sua idade?\n"))

if(!(idade >= 1 && idade <= 120)){
    console.log('idade invalida')
} else {
    if(idade <18){
        console.log('menor de idade')
    } else{
        console.log('maior de idade')
    }
}

/* codigos/caracteres especiais para string:
\n - quebra linha
\t - tabulação
*/

/* operadores logicos

&& - "e"
|| - "ou" (pipe)
! - "nao"

*/