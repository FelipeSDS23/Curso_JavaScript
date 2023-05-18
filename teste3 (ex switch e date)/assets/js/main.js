addEventListener('load', function showDate() {
    let data = document.querySelector('#data');
    data.innerHTML = `${weekDay()}, ${monthDay()} de ${monthName()} de ${year()} ${hours()}:${minutes()}`;
})

function todayDate() {
    let actualDate = new Date();
    return actualDate;
}

function weekDay() {
    let wday = todayDate();
    wday = wday.getDay();
    switch (wday) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
    }
}

function monthDay() {
    let mday = todayDate();
    mday = mday.getDate();
    return mday;
}

function monthName() {
    let monthName = todayDate();
    monthName = monthName.getMonth();
    switch (monthName) {
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'
        case 8:
            return 'Setembro'
        case 9:
            return 'Outubro'
        case 10:
            return 'Novembro'
        case 11:
            return 'Dezembro'
    }
}

function year() {
    let actualYear = todayDate();
    actualYear = actualYear.getFullYear();
    return actualYear;
}

function hours() {
    let hours = todayDate();
    hours = hours.getHours();
    if (hours <= 9){
        return `${0}hours`
    }
    else {
        return hours;
    }
}

function minutes() {
    let min = todayDate();
    min = min.getMinutes();
    if (min <= 9){
        return `${0}min`
    }
    else {
        return min;
    }
}


