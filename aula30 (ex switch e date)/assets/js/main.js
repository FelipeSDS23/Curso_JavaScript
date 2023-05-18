/*
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaSemanaTexto = 'Terça-feira';
        case 3:
            return diaSemanaTexto = 'Quarta-feira';
        case 4:
            return diaSemanaTexto = 'Quinta-feira';
        case 5:
            return diaSemanaTexto = 'Sexta-feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            return diaSemanaTexto = '';
    }
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()}, de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);
*/


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

