//Some todos os números (Reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indice, array){
    return acumulador += valor;
}, 0);

console.log(total);



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, obj){
    if (acumulador.idade > obj.idade) return acumulador;
    return obj;
});

console.log(pessoaMaisVelha);