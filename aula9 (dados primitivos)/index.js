/* NÃO USAR VAR, POIS ASSIM A VARIAVEL PODERA SER DECLARADA MAIS DE UMA VEZ
var nome = 'pedro'
var nome = 'maria'
console.log(nome)
*/

//USE SEMPRE O LET OU CONST
let nome = 'pedro';
const sobrenome = 'silva';

//Tipos de dados primitivos:
const nome1 = 'Luiz'; //string
const num1 = 10; //number
const num2 = 13.52; //number
let nomeAluno; //undefined -> não aponta para local na memória
const sobrenome1 = null //nulo -> não aponta para local na memória
const aprovado = true //boolean = true, false (lógico)