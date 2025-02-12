// console.log() é uma função para enviar mensagens para a tela. 
// em JavaScript o ponto e virgula (;) não é obrigatorio
// uma variavel é um espaço guardado ou alocado na memoria ram, para gaurdar uma informação com um tipo pré-estabelecido
// variaveis do JavaScript: string(textos), number (numeros inteiros e decimais), boolean(booleanos- operações cuja resultados serão true ou false)
// JavaScript possue uma tipagem dinamica, o interpretador infere o tipo da variavel (ou seja, ele deduz o tipo de variavel)

console.log(`'NodeJS' é "legal"`);


// 3 maneiras de criar uma variavel em javascript: const, let e var
// const - local [imutavel]
// let - local [mutavel]
// var - global [mutavel]

//as variaveis const e let são locais, e por isso NÃO funcionam fora do bloco ({})
{
    const nome = 'julia';
    let idade = '20';
}
console.log('nome', nome) //dará erro, pois o console.log nao esta dentro do bloco, e assim não reconhece a variavel
// ja o var funciona dentro e fora do bloco
// é recomendado o uso de var apenas nos casos em que vc irá guardar uma informação enquanto o programa estiver em execução

// criando uma variavel para armazenar a idade, seu valor pode ser alterado posteriormente (declarando)
let idade;
idade = 10;
// criando uma variavel para armazenar a idade, seu valor pode ser alterado posteriormente (inicializado)
let idadee = 10;
// a const é obrigatoriamente inicializada
const nome = "julia";

//formas de concatenar
console.log("Seu nome:", nome);
console.log("Seu nome:" + nome);
// entre crase(``), a forma de concatenar é diferente
console.log(`Seu nome: ${nome}`);

// para saber o tipo de variavel:
console.log(typeof nome);
