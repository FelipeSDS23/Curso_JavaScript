class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pessoa('Felipe', 'Silva');
const p2 = new Pessoa('Maria', 'Silva');
const p3 = new Pessoa('Joao', 'Silva');
const p4 = new Pessoa('Luiz', 'Silva');

console.log(p1.falar());
console.log(p2);
console.log(p3.comer());
console.log(p4);