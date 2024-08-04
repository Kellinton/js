// Faça um algoritmo que receba 4 (quatro) números, calcule e mostre a soma dos números


function somarNumeros(n1, n2, n3, n4){
    const soma = n1 + n2 + n3 + n4;
    
    return soma;
}


function main() {
    const resultado = somarNumeros(4, 5, 7, 10);
    console.log(resultado);
}

main();