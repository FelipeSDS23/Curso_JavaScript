function Carro(model, fabricante, hp, fuel) {
    this.model = model;
    this.fabricante = fabricante;
    this.hp = hp;
    this.fuel = fuel;
}

Carro.prototype.fuelConsuming = function() {
    this.fuel--;
    console.log(this.fuel);
}

const carro1 = new Carro('F40','Ferrari', 900, 100);

let timer = setInterval(carro1.fuelConsuming, 1000)



carro1.fuelConsuming();

console.log(carro1);