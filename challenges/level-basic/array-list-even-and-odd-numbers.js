// array que lista números pares e ímpares, e mostra a quantidade de cada um

const numeros = [];
const numerosPares = [];
const numerosImpares = [];
let indicePar = 0;
let indiceImpar = 0;

numeros.push(7);
numeros.push(8);
numeros.push(4);
numeros.push(2);
numeros.push(11);
numeros.push(4);
numeros.push(12);
numeros.push(5);



for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if(numero % 2 == 0){

        numerosPares.push(numero);    
        indicePar++;

    }else{

        numerosImpares.push(numero);
        indiceImpar++

    }
    
}

console.log(` Números PARES: \n ${numerosPares} (${indicePar} no TOTAL) \n`);
console.log(` Números ÍMPARES: \n ${numerosImpares} (${indiceImpar} no TOTAL) \n`);