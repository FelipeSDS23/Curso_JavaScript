/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor 
(Primitivos são copiados para outra variavel)

Referência (mutável) - array, object, function
(Não são copiados, apontam para o mesmo endereço na memória, para copiar ex: b = {...a}; )
*/


let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);  //mesmo alterando só o a o b tambem será alterado pois apontam para o mesmo local na memória
console.log(a, b);


/*
let a = 'A';
let b = a; //cópia (b continuara com o valor a, mesmo se variavel a for alterada posteriormente)
console.log(a, b);

a = 'outra coisa';
console.log(a, b);
*/


/*
//          0123
let nome = 'Luiz';
nome[0] = 'R';        //não é possivel alterar parte da string
console.log(nome[0], nome);  
*/