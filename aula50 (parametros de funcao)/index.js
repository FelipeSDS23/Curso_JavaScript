// argumentos que sustenta todos os argumentos enviados 
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);


//quando não for passado um argumento como parametro ou quando o argumento for undefined, será considerado o valor após o =.

function funcao2(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao2(2, undefined, 20);

//rest operator
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;        
    }

    console.log(acumulador);
}
conta('+ v', 1, 20, 30, 40, 50);