//Criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Felipe';

    if (nome === 'Felipe') {
        resolve('Usuário Felipe encontrado!')
    } else {
        reject('O usuário Felipe não foi encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data);
})

//Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Felipe';

    if (nome === 'Felipe') {
        resolve('Usuário Felipe encontrado!')
    } else {
        reject('O usuário Felipe não foi encontrado!')
    }
})

myPromise2.then((data) => {
    return data.toLowerCase();
}).then((StringModificada) => {
    console.log(StringModificada);
})

// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'João';

    if (nome === 'Felipe') {
        resolve('Usuário Felipe encontrado!')
    } else {
        reject('O usuário Felipe não foi encontrado!')
    }
})

myPromise3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err);
})