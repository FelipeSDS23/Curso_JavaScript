function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function carregandoDados(dado, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(dado) 
        }, tempo);
    });
}

carregandoDados('dados1', rand(1, 3))
    .then(dado => {
        console.log(dado);
        return carregandoDados('dados2', rand(1, 3));
    })
    .then(dado => {
        console.log(dado);
        return carregandoDados('dados3', rand(1, 3));
    })
    .then(dado => {
        console.log(dado);
    })