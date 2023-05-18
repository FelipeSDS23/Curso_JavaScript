const nome = 'Felipe';
const sobrenome = 'Silva';
const idade = 24;
const peso = 60;
const alturaEmM = 1.72;
let imc;
let anoNascimento;
imc = peso / alturaEmM * alturaEmM;
anoNascimento = 2023 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
