// Declaraçõa de função (Function hoisting)

falaOi();  //A função é chamada antes de ser declarada (hoisting)

function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression (Expressão dentro de constante)

const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

// Função como parametro de outra função

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

//Arrow function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');  
};

funcaoArrow();

//Dentro de um objeto

const obj = {
    falar: function() {      //ou falar() {
        console.log('Estou falando...');
    }
};

obj.falar();