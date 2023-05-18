//Map pode alterar valores do array
//CUIDADO, Map altera o valor do array original

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//const nomePessoas = pessoas.map(obj => obj.nome);

//const idades = pessoas.map(function (obj) { 
//    delete obj.nome; 
//    return obj
//});

const pessoasId = pessoas.map(function (obj, indice){
    obj.id = indice;
    return obj;
})

console.log(pessoasId);