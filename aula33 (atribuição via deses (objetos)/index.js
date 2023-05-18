const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
}

//Atribuição via desestruturação
const { nome: n, sobrenome, endereço: {rua, numero}} = pessoa;
console.log(n, sobrenome, rua, numero);