// função para calcular percentual de juros e imprimir o valor total

function incrementarJuros(valor, percentual){
    const valorDeAcrescimo = (percentual / 100) * valor;

    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 50));
console.log(incrementarJuros(200, 100));


