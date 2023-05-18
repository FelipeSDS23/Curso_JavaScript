const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Silva',
    idade: 24,
    falaNome: function () {
        console.log(`${this.nome} está falando seu nome.`);
    },
    getDataNascimento: function () {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

const chave = 'sobrenome';

console.log(pessoa.nome);
console.log(pessoa[chave]);

pessoa.falaNome();
console.log(pessoa.getDataNascimento());

/*
delete pessoa.nome;
console.log(pessoa);
*/

/*
for(let key in pessoa) {
    console.log(pessoa[key]);
}
*/

//Factory functions // Constructor functions // Classes

//Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Felipe', 'Silva');
console.log(p1.nomeCompleto);

//Constructor functions
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Felipe', 'Silva');
