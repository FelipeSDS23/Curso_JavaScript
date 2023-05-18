function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    });
}


// Promise.all   **entrega todos os resultados em um array   
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    });


// Promise.race   **entrega a primeira que foi resolvida
const promises2 = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
];

Promise.race(promises2)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    });


//Promise.resolve 
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));


//Promisse.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('erro', e));