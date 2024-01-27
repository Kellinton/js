// Faça um algoritmo que receba dois números e mostre o menor entre eles.

const numeros = [];

numeros.push(0);
numeros.push(1);


const menorNumero = Math.min(...numeros);


console.log(`
| ${menorNumero} | é o menor número entre:  ${numeros.join('  |  ')}`
);

