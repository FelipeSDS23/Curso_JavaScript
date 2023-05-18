const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {   //Metodo
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade() {  //Metodo
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade //da na mesma que o de baixo
          
        //nome: nome,
        //sobrenome: sobrenome,
        //idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', '25');
const pessoa2 = criaPessoa('Maria', 'Oliveira', '34');
const pessoa3 = criaPessoa('João', 'Moreira', '23');
const pessoa4 = criaPessoa('Junior', 'Otávio', '55');
console.log(pessoa1.nome , pessoa2.nome);
*/


/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/