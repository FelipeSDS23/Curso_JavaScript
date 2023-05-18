/*
function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
*/

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
    for(let valor of g4) {
        console.log(valor);
    }