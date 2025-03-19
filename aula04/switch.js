const readline = require('readline-sync');
const opcao = Number(readline.question('\nOpcao: '))
const CLS = '\x1Bc';

const BLACK = '\u001b[30m';
const VERMELHO = '\u001b[31m';
const VERDE = '\u001b[32m';
const AMARELO = '\u001b[33m';
const AZUL = '\u001b[34m';
const MAGENTA = '\u001b[35m';
const CIANO = '\u001b[36m';

const FVERMELHO = '\u001b[41m';
const FVERDE = '\u001b[42m';
const FAMARELO = '\u001b[43m';
const FAZUL = '\u001b[44m';
const FMAGENTA = '\u001b[45m';
const FCIANO = '\u001b[46m';
const FBRANCO = '\u001b[47m';

const NORMAL = '\u001b[m';
const NEGRITO = '\u001b[1m';
const SUBLINADO = '\u001b[4m';

console.log(CLS);
console.log(VERDE, 'texto em verde', NORMAL)


console.log('[1] data e hora com texto verde');
console.log('[2] data e hora com texto azul');
console.log('[3] data e hora com texto vermelho');
console.log('[4] data e hora com fundo verde');
console.log('[5] data e hora com fundo azul');
console.log('[6] data e hora com fundo vermelho');
console.log('[7] Sair\n')

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const ano = date.getFullYear();
const hora = date.getHours();
const minuto = date.getMinutes();

switch(opcao) {
    case 1: {
        console.log(`${VERDE}${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`);
        break;
    }
    case 2: {
        console.log(`${AZUL}${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`);
        break;
    }
    case 3: {
        console.log(`${VERMELHO}${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`);
        break;
    }
    case 4: {
        console.log(`${FVERDE}${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`);
        break;
    }
    case 5: {
        console.log(`${FAZUL}${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`);
        break;
    }
    case 6: {
        console.log(`${FVERMELHO}${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`);
        break;
    }
    default: {
        console.log('tchau')
    }
}