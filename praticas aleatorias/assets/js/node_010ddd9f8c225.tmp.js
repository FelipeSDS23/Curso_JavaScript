function Carro(model, fabricante, hp, fuel) {
    this.model = model;
    this.fabricante = fabricante;
    this.hp = hp;
    this.fuel = fuel;
}

Carro.prototype.fuelConsuming = function() {
    this.fuel--;
}

const carro1 = new Carro('F40','Ferrari', 900, 100);

function consumo() {
    carro1.fuelConsuming();
    console.log(carro1.fuel);
}

let timer = setInterval(consumo, 1000);

let timeOut = setTimeout(consumo, 10000);
