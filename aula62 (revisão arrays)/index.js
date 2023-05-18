const nomes = ['Eduardo', 'Maria', 'Joana', 'Pedro', 'Roberta'];

delete nomes[2]; //deleta e deixa o indice vazio
console.log(nomes);
nomes.push('Felipe'); //adciona ao final do array
nomes.unshift('Luana'); //adciona ao inicio do array
console.log(nomes);
let removidos = nomes.pop(); //remove ultimo elemento do array e armazena na variavel
removidos += nomes.shift();//remove primeiro elemento do array e armazena na variavel
console.log(nomes);


let novo = nomes.slice(1, 4); //pega trecho do array do indice 1 ao 3 (pode trabalhar com indices negativos para comecar do final)
console.log(novo);

const nome = 'Felipe Santos Silva';
const nomeSobrenome = nome.split(' '); //pega uma string e separa ela, nesse caso pelos espaços e retorna um array
console.log(nomeSobrenome);
const nomeCompleto = nomeSobrenome.join(' '); //converte o array para uma string e une nesse caso pelo espaço
console.log(nomeCompleto);