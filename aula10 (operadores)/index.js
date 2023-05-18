/*

Ordem de precedencia dos operadores:

1º ()
2º **
3º * / %
4º + - 

*/

//Incremento
let contador = 1;
contador++;
console.log(contador);

//Decremento
contador--;
console.log(contador);

//Operadores de atribuição
contador += 10;
console.log(contador)

//Conversão 
let num1 = 10;
let num2 = '10.5';
//let num2 = parseInt(num2); -> Pega só a parte inteira
//let num2 = parseFloat(num2); -> Pega também a parte decimal
//let num2 = Number(num2); -> O js se vira