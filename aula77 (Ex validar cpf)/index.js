let cpf = '147.365.206-55';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);

cpfArray.splice(-2, 2);

cpfArray.map(function (valor, indice) {
    cpfArray[indice] = Number(valor);
})

//Função calculo
function calcDigito(cpfArray) {
    let i = cpfArray.length + 1;
    let total = cpfArray.reduce(function (acumulador, valor) {
        acumulador += valor * i;
        i--;
        return acumulador;
    }, 0)

    let digito = 11 - (total % 11);
    if (digito > 9) {
        digito = 0
    }

    console.log(digito)
    cpfArray.push(digito)
}

//Obter primeiro dígito
calcDigito(cpfArray);

//Obter segundo dígito
calcDigito(cpfArray);

//Conclusão
let novoCpf = cpfArray.join('');

console.log(novoCpf)
console.log(cpfLimpo)

novoCpf === cpfLimpo ? console.log('Cpf válido') : console.log('Cpf inválido');


