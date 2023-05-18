/*
Valores avaliados em falso (FALSY) no js:
    *false      Valor falso literal
    *0          Zero
    *'' "" ``   String vazia
    *null
    *undefined
    *NaN         
*/

//EX 1 com &&
console.log('Felipe' && 'Maria' && undefined && 'Jõao');
// Vai retornar o valor undefined pois o mesmo é falso (falsy)*/
console.log('Felipe' && 'Maria' && 'Jõao');
// Vai retornar o valor da ultimo item true


//EX 2 com &&
function falaOi() {
    return 'oi';
}

const vaiExecutar = 'Jõao';

console.log(vaiExecutar && falaOi());   


//EX 3 com ||
console.log(null || 0 || '' || 'Felipe' || true);
//Retorna primeiro valor q seja true




