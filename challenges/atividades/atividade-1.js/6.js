// Calcular o perímetro de um retângulo (Perímetro = 2 * (largura + altura));

function calcularPerimetro(largura, altura){
    let perimetro = 2*(largura + altura);
    return perimetro;
}


function main() {
    const resultado = calcularPerimetro(10, 5);
    console.log(resultado);
}

main();