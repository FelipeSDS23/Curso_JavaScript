/*
Object.values //retorna um array com os valores do objeto
Object.entries //retorna:   [[ 'nome', 'Produto' ],[ 'preco', 1.8 ],[ 'material', 'Porcelana' ]]
Object.getOwnPropertyDescriptor(obj, 'key')
Object.assign(des, any)
... (spread)
*/

/*
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto1 = {
    nome: 'Caneca', 
    preco: 1.8, 
    material: 'Porcelana'
};

const produto2 = Object.assign({}, produto1);

Object.defineProperties(produto2, {
    nome: {
        value: 'Celular',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    preco: {
        value: '700',
    },
    material: {
        value: 'Metal'
    }
})

const produto3 = {...produto2};

Object.defineProperty(produto3, 'nome', {
    value: 'Computador'
})


console.log(produto1);
console.log(produto2);
console.log(produto3);

console.log(Object.getOwnPropertyDescriptor(produto2,'nome'));
console.log(Object.keys(produto1));
console.log(Object.values(produto3));
console.log(Object.entries(produto3));
