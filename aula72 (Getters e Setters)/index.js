function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configurável
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 30);
p1.estoque = 4;
console.log(p1.estoque);