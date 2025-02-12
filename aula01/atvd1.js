// programa que calcula e exibe a media entre duas notas
let n1 = 5, n2 = 3, media = (n1 + n2) / 2;
console.log('Sua primeira nota foi:', n1, ' e sua segunda nota foi:', n2, 'portanto sua média é:', media);


// programa que calcula e exibe o IMC de uma pessoa
let peso = 67, altura = 1.63, imc = peso / (altura*altura)
console.log("Seu IMC é igual a:", imc)

//programa que calcula e exibe a temperatura em fahrenheit
let celcius = 26;
const fahrenheit = (celcius * 1.8) + 32
console.log(celcius+'° em fahrenheit é igual a:', fahrenheit+'°F');

//programa que exibe o preço final de uma compra com o percentual de desconto sendo informado na entrada, bem como o preço do produto
let precoProd = 1200, desconto = (precoProd / 100) * 15
const valorFinal = precoProd - desconto;
console.log("O preço do produto era R$", precoProd, "e voce obteve o desconto de R$ "+ desconto + ". Portanto, o valor a ser pago será: R$", valorFinal)
