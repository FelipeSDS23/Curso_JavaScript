const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const btnRemover = document.querySelector('.remover');

btnTarefa.addEventListener('click', function () { criaTarefa(); })

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        criaTarefa();
    }
})

document.addEventListener('click', function(e){
    let elemento = e.target;
    if (elemento.classList.contains('remover')) {
        elemento.parentElement.remove();
    }
})

function criaTarefa() {
    if (!inputTarefa.value) return;
    let tarefa = inputTarefa.value;
    let li = criaLi(tarefa);//
    criaRemover(li);
    limpaCampo();
}

function criaLi(tarefa) {
    let li = document.createElement('li');
    li.innerText = tarefa;
    tarefas.appendChild(li);
    return li;
}

function criaRemover(li) {
    let btn = document.createElement('button');
    btn.innerText = 'Remover';
    btn.setAttribute('class','remover');
    li.appendChild(btn);
}

function limpaCampo() {
    inputTarefa.value = '';
    inputTarefa.focus();
}