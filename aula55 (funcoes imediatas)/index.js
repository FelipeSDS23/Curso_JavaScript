// IIFE -> Immeduately invoked function expression


//Não esta no escopo global
(function () {
    const nome = 'Luiz';
    console.log(nome);
})();


//Esta no escopo global
const nome = 'Pedro';
console.log(nome);


const date = {
    nome: 'felipe',
    idade: 24,
    getFullYear: function oi () {
        console.log('oi');
    }
}
