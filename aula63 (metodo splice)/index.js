//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
//nomes.splice(indice de inicio, quantidade a ser deletada, elemento a adicionar)

let removidos = nomes.splice(-2, 2); //remove 2 indices a partir do indice -2
console.log(nomes, removidos);

nomes.splice(1, 1, 'Luiz'); //remove o indice 1 e adiciona 'Luiz' a ele (substitui)
console.log(nomes);

//simulando o pop
removidos = nomes.splice(-1, 1);
console.log(nomes);

//simulando o shift
removidos = nomes.splice(0, 1);
console.log(nomes);

//simulando o push
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);

//simulando o unshift
nomes.splice(0, 0, 'Felipe');
console.log(nomes);