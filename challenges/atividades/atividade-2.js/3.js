// Faça um algoritmo que receba 3 (três) notas, calcule e mostre a média aritmética entre elas;

// Calcular média de quatro números/notas 

function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;

    return media;
}

function main() {
    const resultado = calcularMedia(5, 7, 10);
    console.log(resultado)
}

main();

