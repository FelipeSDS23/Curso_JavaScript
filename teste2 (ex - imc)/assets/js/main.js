function imcCalc (peso, altura) {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        return `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Peso normal)`
    }
    else if (imc >= 25 && imc <= 29.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
    }
    else if (imc >= 30 && imc <= 34.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
    }
    else if (imc >= 35 && imc <= 39.9) {
        return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
    }
    else if (peso > 40) {
        return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
    }
    else {
        return `Valor inválido, digite um valor válido e tente novamente.`
    }
}


function calcular() {
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = imcCalc(peso, altura);
    resultado.style.display = 'block';
}