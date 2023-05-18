const verdadeira = true;

//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função

let nome = 'Luiz';  //criando
var nome2 = 'Luiz'; //criando

if (verdadeira) {
    let nome = 'Otávio'; //criando
    var nome2 = 'Rogério'; //redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; //redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);

/*
function falaOi () {
    var sobrenome = 'Miranda';

    if (verdadeira) {
        var nome = 'Luiz';
        console.log(nome, sobrenome);
    }
}

falaOi();
*/