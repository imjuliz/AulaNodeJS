const readline = require('readline-sync')

const CLS = '\x1Bc';
console.log(CLS);
const agenda = [];

while (true) {
    let nomeNovo = readline.question('Digite o nome do contato que deseja adicionar: ');
    let telNovo = Number(readline.question('Digite o telefone do contato que deseja adicionar: '));
    let cddNovo = readline.question('Digite a cidade do contato que deseja adicionar: ');
    if (isNaN(telNovo)){
        console.log('Telefone invalido');
        break;
    } else{
        agenda.push(`Nome: ${nomeNovo}, Telefone: ${telNovo}, Cidade: ${cddNovo}`);
        let resposta = readline.question('Voce deseja continuar? (s/n):\n');
        if (resposta !== 's') {
            for (i in agenda){
                console.log(`${agenda[i]}`)
            }
            break;
        }
    }
};