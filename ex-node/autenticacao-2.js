const readline = require('readline-sync');
let email;
let senha;
let tentativas;

for (tentativas = 3; tentativas <= 3 && tentativas>=0; tentativas -= 1) {
    email = readline.question("Informe seu e-mail: \n");
    senha = readline.question("Informe sua senha: \n");
    if (email === 'aluno@senai.com' && senha === '1234@') {
        console.log('Seja bem-vindo')
        break;
    } else {
        console.log(`voce tem mais ${tentativas} tentativas`)
    }
}