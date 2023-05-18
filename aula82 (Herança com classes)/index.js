class DispositivoEletronico {
    constructor(nome, marca, valor) {
        this.nome = nome;
        this.marca = marca;
        this.valor = valor;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log('Ligado')
    }

    desligar() {
        this.ligado = false;
        console.log('Desligado')
    }
}

//Classe filha 1:
class Computador extends DispositivoEletronico {
    constructor(nome, marca, valor, gpu, processador) {
        super(nome, marca, valor);
        this.gpu = gpu;
        this.processador = processador;
    }
}

//Classe filha 2:
class Smartphone extends DispositivoEletronico {
    constructor(nome, marca, valor, camera, polegadas){
    super(nome, marca, valor);
    this.camera = camera;
    this.polegadas = polegadas;
    }   
}

//testes:

const device1 = new DispositivoEletronico('Impressora', 'HP', 400);
const comp1 = new Computador('Samsung book', 'Samsung', 3000, 'Rtx 2060', 'i5');
const cel1 = new Smartphone('Iphone 13', 'Apple', 5000, '64mp', 7);

cel1.ligar();
console.log(cel1);
