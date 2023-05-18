/*
Esse código possui 2 testes verdadeiros porem somente o primeiro será executado
*/

let numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('Este número esta entre 0 e 5.');
}
else if (numero >= 6 && numero <= 8) {
    console.log('Este número esta entre 0 e 5.');
}   
else if (1 === 1) {
    console.log('LITERAL'); //VERDADEIRA
}  
else if (numero >= 9 && numero <= 11) {
    console.log('Este número esta entre 9 e 11.'); //VERDADEIRA
}  
else {
    console.log('O número NÃO esta entre 9 e 11.');
} 