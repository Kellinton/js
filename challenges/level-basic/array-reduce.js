// Fazendo a soma de uma lista/array com o método reduce
// Reduce serve para diminuir/reduzir a lista ao combinar elementos de um em um até sobrar apenas um elemento
const numeros = [];

numeros.push(5);
numeros.push(7);
numeros.push(9);
numeros.push(1);
numeros.push(2);
numeros.push(10);

const somarNumeros = numeros.reduce((previous, current) => {
    return previous + current
})

console.log(somarNumeros);