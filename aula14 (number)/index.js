let num1 = 1;
let num2 = 2.5;
let num3 = 230;
let num4 = 23.43243245556;
let num5 = 12;

console.log(num1.toString() + num2); //tramsforma um number em string temporariamente
num1 = num1.toString(); //altera number para string definitivamente
console.log(num3.toString(2)); //mostra número em binário
console.log(num4.toFixed(2)); //mostra apenas 2 casas decimais
console.log(Number.isInteger(num5)); //verifica se o número e inteiro 

let temp = num5 * 'olá';
console.log(Number.isNaN(temp)); //se der erro de NAN retorna true, se for um número retorna false

num2 = Number(num2.toFixed(2)); //corrige imprecisão de números decimais   