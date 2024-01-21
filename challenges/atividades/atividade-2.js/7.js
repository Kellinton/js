// Faça um algoritmo que calcule a área de um triângulo (Área = (Base * Altura) / 2)

function calcularArea(base, altura){
    let area = (base * altura) / 2;
    return area;
}


function main() {
    const resultado = calcularArea(10, 5);
    console.log(resultado);
}

main();