const frase = "Exemplo de laço for...";
const padding = 2;
const larguraInterna = frase.length + padding * 2;
const linhaBorda = "█".repeat(larguraInterna + 2);
const linhaCentral = "█" +
    " ".repeat(padding) +
    frase +
    " ".repeat(padding) +
    "█";

console.log(linhaBorda);
console.log(linhaCentral);
console.log(linhaBorda);