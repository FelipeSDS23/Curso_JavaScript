/*
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Felipe', 'Silva');
console.log(p1);
*/


//Função dentro de função
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));