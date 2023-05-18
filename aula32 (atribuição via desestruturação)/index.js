// ...rest, ...spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeitoNumero, segundoNumero, ...resto] = numeros;  //pega os índices 0 e 1 de const numeros, e depois pega o restante após os ...
console.log(primeitoNumero, segundoNumero);
console.log(resto);

//Pulando números
const [um, , três, , cinco, , sete] = numeros;
console.log(um, três, cinco);

/*
//                 0          1          2
//              0  1  2    0  1  2    0  1  2
const nums = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = nums;
console.log(seis);
*/