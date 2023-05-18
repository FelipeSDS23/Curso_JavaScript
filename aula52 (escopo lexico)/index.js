const nome = 'Luiz'

function falaNome() {
    console.log(nome); //O nome será o declarado no escopo global pois como ele não foi encontrado dentro da função o js buscará ele no mesmo escopo ou no pai
}

falaNome();