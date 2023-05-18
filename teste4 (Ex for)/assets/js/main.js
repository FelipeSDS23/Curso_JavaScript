const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

addEventListener('load', function adcionaElemento() {
    criaDiv();
    let divContainer = document.querySelector('.divContainer');
    for(let i = 0; i < elementos.length; i++) {
        let tag = document.createElement(elementos[i].tag);
        divContainer.appendChild(tag);
        tag.innerHTML = elementos[i].texto;
    }
})

function criaDiv() {
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    container.appendChild(div)
    div.classList.add('divContainer')
}