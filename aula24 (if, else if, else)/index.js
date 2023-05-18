/*
If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter varios else if na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizamos apenas if e else  
*/

let hora = 13;

if (hora <= 11) {
    console.log('Bom dia');
}
else if (hora <= 17) {
    console.log('Boa tarde');
}
else if (hora <= 23) {
    console.log('Boa noite');
}
else {
    console.log('Olá');
}