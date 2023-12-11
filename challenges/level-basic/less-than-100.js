// challenge 19

// Dado dois números, retorne true se a soma de 
// ambos os números for menor que 100. Caso 
// contrário, retorne false.

function menorQue100(numero1, numero2) {

    if(numero1 + numero2 < 100) {
        return console.log(`${true}, ${numero1} + ${numero2} = ${numero1 + numero2}`);
    }
        return console.log(`${false}, ${numero1} + ${numero2} = ${numero1 + numero2}`);

}

console.log(menorQue100(22, 15));


