function adicao(x, y) {
    return x + y;
}
function subtracao(x, y) {
    return x - y;
}
function multiplicacao(x, y) {
    return x * y;
}
function divisao(x, y) {
    return x / y;
}


function calcular(x, operacao, y) {
    console.log(operacao(x, y));
}

calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)

/*

 Um callback é uma função que é passada como argumento para
  outra função e é executada após a conclusão de uma 
  operação assíncrona ou de um determinado evento. 

*/