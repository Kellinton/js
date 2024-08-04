// Faça um programa que receba 3 números e mostre em ordem crescente.


// Com 3 números e com if

const lista = [0, 3, 1];

const listarOrdem = () => {
    
        if(lista[0] <= lista[1] && lista[0] <= lista[2] && lista[1] <= lista[2]) {
            return `Números: ${lista[0]}, ${lista[1]}, ${lista[2]}`;
        }else if(lista[0] <= lista[1] && lista[0] <= lista[2] && lista[2] <= lista[1]) {
            return `Números: ${lista[0]}, ${lista[2]}, ${lista[1]}`;
        }else if(lista[1] <= lista[0] && lista[1] <= lista[2] && lista[0] <= lista[2]) {
            return `Números: ${lista[1]}, ${lista[0]}, ${lista[2]}`;
        }else if(lista[1] <= lista[2] && lista[1] <= lista[0] && lista[2] <= lista[0]) {
            return `Números: ${lista[1]}, ${lista[2]}, ${lista[0]}`;
        }else if(lista[2] <= lista[0] && lista[2] <= lista[1] && lista[0] <= lista[1]) {
            return `Números: ${lista[2]}, ${lista[0]}, ${lista[1]}`;
        }else if(lista[2] <= lista[1] && lista[2] <= lista[0] && lista[1] <= lista[0]) {
            return `Números: ${lista[2]}, ${lista[1]}, ${lista[0]}`;
        }
}

// console.log(listarOrdem());

// Com método de array sort() e com números dinâmicos

const numeros = [];

numeros.push(7);
numeros.push(-1);
numeros.push(70);
numeros.push(20);
numeros.push(8);
numeros.push(77);
numeros.push(4);
numeros.push(-2);

console.log(numeros.sort((a, b) => a - b));

