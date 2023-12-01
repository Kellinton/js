// challenge 8

// V = I * R (Tensão = corrente * resitência), (Lei de Ohm)

function calcularCircuito(corrente, resistencia) {
    return corrente * resistencia
}

let resultado = calcularCircuito(5, 7);

console.log(`A tensão elétrica é: ${resultado}`);