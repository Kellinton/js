// Elaborar um algoritmo que leia dois números e mostre sua soma,
// subtração, divisão e multiplicação.

// Verificar se um número é maior, menor ou igual a zero;

function operacoes(n1, n2){
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n1 / n2;
    const multiplicacao = n1 * n2;
    
    return `
    Soma: ${soma}
    Subtração: ${subtracao}
    Divisão: ${divisao}
    Multiplicação: ${multiplicacao}`
}

function main() {
    const resultado = operacoes(2, 10);
    console.log(resultado);
}

main();