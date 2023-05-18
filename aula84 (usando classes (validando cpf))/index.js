// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

class ValidaCpf {
    valida(cpfInteiro) {
        const cpf = cpfInteiro.replace(/\D+/g, '');
        if(this.validaFormato(cpfInteiro, cpf)){return};
        const cpfLimpoArray = this.limpaCpf(cpf);
        const digito1 = String(this.calculaDigito(cpfLimpoArray));
        console.log(digito1);
        cpfLimpoArray.push(digito1);
        const digito2 = String(this.calculaDigito(cpfLimpoArray));
        console.log(digito2);
        cpfLimpoArray.push(digito2);
        const novoCpf = cpfLimpoArray.join('')
        if (cpf === novoCpf) {
            return console.log('CPF VÁLIDO');
        }
        else {
            return console.log('CPF INVÁLIDO');
        }
    }

    validaFormato(cpfInteiro, cpf) {
        if (!cpfInteiro) {
            console.log('Insira um número.');
            return true;
        }
        if (cpf.length < 11 || cpf.length > 11) {
            console.log('Digite um número com 11 dígitos.')
            return true;
        }
        if (cpf.charAt(0).repeat(11) === cpf) {
            console.log('Digite um cpf válido.');
            return true;
        }
    }

    calculaDigito(cpfLimpoArray) {
        let regressivo = cpfLimpoArray.length + 1;
        const soma = cpfLimpoArray.reduce(function (acumulador, indice) {
            acumulador += indice * regressivo;
            regressivo--;
            return acumulador;
        }, 0)
        const digito = 11 - (soma % 11);
        if (digito > 9) {
            return 0;
        }
        else {
            return digito;
        }
    }

    limpaCpf(cpf) {
        const cpfArray = cpf.split('');
        const novoCpf = cpfArray.slice(0, -2);
        return novoCpf;
    }
}

const cpf1 = new ValidaCpf();

cpf1.valida('070.987.720-03');
