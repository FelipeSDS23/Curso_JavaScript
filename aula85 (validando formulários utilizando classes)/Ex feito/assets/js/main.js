const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const cpf = document.querySelector('#cpf');
const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');
const repetirSenha = document.querySelector('#repetirSenha');
const enviarBtn = document.querySelector('#enviarBtn');
const nomeErro = document.querySelector('#nomeErro');
const sobrenomeErro = document.querySelector('#sobrenomeErro');
const cpfErro = document.querySelector('#cpfErro');
const usuarioErro = document.querySelector('#usuarioErro');
const senhaErro = document.querySelector('#senhaErro');
const repetirSenhaErro = document.querySelector('#repetirSenhaErro');

enviarBtn.addEventListener('click', validar);

function validar() {
    const valida = new ValidaForm(nome, sobrenome, cpf, usuario, senha, repetirSenha, enviarBtn);
    valida.verificaVazio();
    valida.verificaCaracteresUsuário();
    valida.verificaTamanhoDoUsuário();
    valida.verificaTamanhoDaSenha();
    valida.verificaSenhaCorreta();

    const cpf1 = new ValidaCpf();
    cpf1.valida(cpf.value);
}

class ValidaForm {
    constructor(nome, sobrenome, cpf, usuario, senha, repetirSenha, enviarBtn) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.usuario = usuario;
        this.senha = senha;
        this.repetirSenha = repetirSenha;
        this.enviarBtn = enviarBtn;
    }

    verificaVazio() {
        if (!this.nome.value) { nomeErro.innerText = 'Campo "Nome" não pode estar vazio.'; }
        else { nomeErro.innerText = '' }
        if (!this.sobrenome.value) { sobrenomeErro.innerText = 'Campo "Sobrenome" não pode estar vazio.'; }
        else { sobrenomeErro.innerText = '' }
        if (!this.cpf.value) { cpfErro.innerText = 'Campo "CPF" não pode estar vazio.'; }
        else { cpfErro.innerText = '' }
        if (!this.usuario.value) { usuarioErro.innerText = 'Campo "Usuario" não pode estar vazio.'; }
        else { usuarioErro.innerText = '' }
        if (!this.senha.value) { senhaErro.innerText = 'Campo "Senha" não pode estar vazio.'; } else { senhaErro.innerText = '' }
        if (!this.repetirSenha.value) { repetirSenhaErro.innerText = 'Campo "Repetir Senha" não pode estar vazio.'; }
        else { repetirSenhaErro.innerText = '' }
    }

    verificaCaracteresUsuário() {
        if (/^\w+$/.test(this.usuario.value)) {
        }
        else if (!this.usuario.value) {
            usuarioErro.innerText += '';
        }
        else {
            usuarioErro.innerText += 'Campo "Usuario" só poderá conter letras e/ou números.';
        }
    }

    verificaTamanhoDoUsuário() {
        if (this.usuario.value.length < 3 || this.usuario.value.length > 12) {
            usuarioErro.innerHTML += '<br> O campo "Usuário" deverá ter entre 3 e 12 caracteres.';
        }
    }

    verificaTamanhoDaSenha() {
        if (this.senha.value.length < 6 || this.senha.value.length > 12) {
            senhaErro.innerHTML += '<br> O campo "Senha" precisa ter entre 6 e 12 caracteres.';
        }
    }

    verificaSenhaCorreta() {
        if (this.senha.value === this.repetirSenha.value) {
            return;
        }
        else {
            repetirSenhaErro.innerHTML += '<br>A senha deve ser igual a digitada anteriormente.';
        }
    }
}



/*validar cpf*/

class ValidaCpf {
    valida(cpfInteiro) {
        const cpf = cpfInteiro.replace(/\D+/g, '');
        if (this.validaFormato(cpfInteiro, cpf)) { return };
        const cpfLimpoArray = this.limpaCpf(cpf);
        const digito1 = String(this.calculaDigito(cpfLimpoArray));
        cpfLimpoArray.push(digito1);
        const digito2 = String(this.calculaDigito(cpfLimpoArray));
        cpfLimpoArray.push(digito2);
        const novoCpf = cpfLimpoArray.join('')
        if (cpf === novoCpf) {
            return;
        }
        else {
            cpfErro.innerHTML += 'CPF INVÁLIDO';
            return console.log('CPF INVÁLIDO');
        }
    }

    validaFormato(cpfInteiro, cpf) {
        if (!cpfInteiro) {
            return true;
        }
        if (cpf.length < 11 || cpf.length > 11) {
            cpfErro.innerHTML += 'O campo "CPF" deve ter 11 dígitos.';
            return true;
        }
        if (cpf.charAt(0).repeat(11) === cpf) {
            cpfErro.innerHTML += 'Digite um cpf válido.';
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


