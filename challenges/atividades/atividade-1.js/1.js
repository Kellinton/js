// verificar se um número é positivo ou negativo

function verificar(numero){

    if(numero >= 0) {
        return `${numero} é Positivo`;
    }
    return `${numero} é Negativo`
}

function main() {
    const resultado = verificar(2);
    console.log(resultado);
}

main();