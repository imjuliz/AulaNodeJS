const readline = require('readline-sync');

function programa() {
    while (true) {
        let n = Number(readline.question("Digite um numero: \n"));

        (!(!isNaN(n))) ? console.log('numero invalido') :
            n % 2 === 0 ? console.log(n, 'é um numero par') :
                console.log(n, 'é um numero impar')

        let resposta = readline.question('Voce deseja continuar? (sim/nao):\n');
        if (resposta !== 'sim') {
            console.log('Saindo do programa');
            break;
        }
    }
}
programa();