// Faça um algoritmo que receba números e mostre o maior entre eles.



// Primeira Forma

const numeros = [];
const encontrarMaiorNumero = function (numeros) {
    let maiorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] >= maiorNumero){
            maiorNumero = numeros[i];
        }  
    }
    return maiorNumero
}
numeros.push(0);
numeros.push(2);
numeros.push(10);
numeros.push(70);
numeros.push(40);
numeros.push(60);
numeros.push(1);
numeros.push(-8);
numeros.push(-2);
numeros.push(4);

console.log(`
| ${encontrarMaiorNumero(numeros)} | é o maior número entre:  ${numeros.join('  |  ')} `
);





// Segunda Forma

const numeros2 = [];

numeros2.push(0);
numeros2.push(2);
numeros2.push(1);
numeros2.push(-8);
numeros2.push(-2);

const maiorNumero2 = Math.max(...numeros2);
const menorNumero2 = Math.min(...numeros2);


console.log(`
| ${maiorNumero2} | é o maior número entre:  ${numeros2.join('  |  ')} 
| ${menorNumero2} | é o menor número entre:  ${numeros2.join('  |  ')}`
);

