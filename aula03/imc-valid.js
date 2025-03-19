/* calcular imc e indicar o estao da pessoa */
const readline = require('readline-sync');
let peso = Number(readline.question("Qual o seu peso?\n"));
let altura = Number(readline.question("Qual a sua altura?\n"));
const imc = peso/(altura**2)

// verifica qual o estado da pessoa
if (!(!isNaN(peso) && !isNaN(altura))) {
    console.log('Peso ou altura invalida')
} else if (peso < 10 || altura < 0.5 || altura > 2.50) {
    console.log('altura ou peso invalido')
}
else if (imc < 17) {
    console.log('muito abaixo do peso');
} else if (imc >= 17 && imc <= 18.49) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log('Peso normal');
} else if (imc >= 25 && imc <= 29.99) {
    console.log('acima do peso')
}
else if (imc >= 30 && imc <= 34.99) {
    console.log('obesidade 1');
}
else if (imc >= 35 && imc <= 39.99) {
    console.log('obesidade 2');
}
else if (imc >= 40) {
    console.log('Obesidade 3')
}
