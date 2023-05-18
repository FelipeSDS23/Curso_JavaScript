function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];
    /*
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert('1');
        console.log('foi enviado');
    };
    */

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //resolução
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p><br>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();