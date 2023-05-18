// Função construtora -> objetos
// Função fábrica -> pbjetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //Atributos ou métotos privados
    const ID = 123456;
    const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodos = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodos();