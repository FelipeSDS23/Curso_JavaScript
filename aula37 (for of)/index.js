const nome = 'Luiz Otávio';

//QUANDO USAR CADA FOR:
//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (String, array ou objetos)
//For of - Retorna o valor em si (iteraveis, arrays ou strings)

/*
for (let i = 0; i< nome.length; i++) {
    console.log(nome[i]);               //for clássico
}

for (let i in nome) {
    console.log(nome[i]);               //for in (acessa indice/chave)
}
*/

for (let valor of nome) {
    console.log(valor);             //for of (retorna VALOR dentro do indice/chave)
}