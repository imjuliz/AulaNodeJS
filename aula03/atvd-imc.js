/* calcular imc e indicar o estao da pessoa */
const readline = require('readline-sync');
let peso = Number(readline.question("Qual o seu peso?\n"));
let altura = Number(readline.question("Qual a sua altura?\n"));
let imc = (peso / (altura ** 2)).toFixed(2);

// verifica qual o estado da pessoa
(!(!isNaN(peso) && !isNaN(altura))) ? console.log('Peso ou altura invalida'):
(imc < 17) ? console.log('muito abaixo do peso') : 
(imc >= 17 && imc <= 18.49) ? console.log('Abaixo do peso') : 
(imc >= 18.5 && imc <= 24.99) ? console.log('Peso normal') : 
(imc >= 25 && imc <= 29.99) ? console.log('acima do peso') : 
(imc >= 30 && imc <= 34.99) ? console.log('obesidade 1') : 
(imc >= 35 && imc <= 39.99) ? console.log('obesidade 2') : 
(imc >= 40) ? console.log('obesidade 3') :
console.log('estado morbido')
