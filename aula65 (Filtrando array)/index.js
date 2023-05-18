const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
console.log(nomes);

const maisDe50Anos = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log(maisDe50Anos);

const terminaComA = pessoas.filter((pessoa) => pessoa.nome.toLowerCase().endsWith('a'))
console.log(terminaComA);
