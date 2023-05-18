//Usa se a barra invertida como escape:
console.log("Esse é um \"texto\" exemplo");


//Indice         01234567
let umaString = 'Um texto'
console.log(umaString[6]);

//concatena
console.log(umaString.concat(' depois da string'));

//retorna o indice da palavra 
console.log(umaString.indexOf('texto'));

//Busca indice da letra
console.log(umaString.search(/x/));

//Substitui
console.log(umaString.replace('texto', 'coisa'));

//Substitui todas as letras
let rato = 'o rato roel a roupa do rei de roma';
console.log(rato.replace(/r/g, '#'));

//Tamanho da string
console.log(rato.length);

//Pega um trecho da string do indice 2 ao 6
console.log(rato.slice(2, 6));

//Separa cada palavra de acordo com o caracter apontado (e retorna em um array)
console.log(rato.split(' '));

//Todas as letras maiusculas e minusculas
console.log(rato.toLocaleUpperCase())
console.log(rato.toLocaleLowerCase())