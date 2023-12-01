// challenge 10

//Crie uma função que encontre o intervalo máximo da 
//terceira borda de um triângulo, onde os comprimentos 
//laterais são todos inteiros.

function calcularProximaBorda(lado1, lado2) {
    return (lado1 + lado2) - 1;
}



console.log(calcularProximaBorda(8, 10));