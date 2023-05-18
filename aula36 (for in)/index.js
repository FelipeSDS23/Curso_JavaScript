// 
const frutas = ['Pera', 'Maça', 'Uva'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

console.log(pessoa.nome);
console.log(pessoa['nome']); //Forma alternativa de acesso item do objeto

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);                  //For clássico
}
*/

for (let indice in frutas) {
    console.log(indice);        //For in retorna o indice (arrays) ou chaves (objetos)
}

for (let chaves in pessoa) {
    console.log(chaves);
}