// Verificar se um número é par ou ímpar
function verificarImparPar(numero){
    if(numero % 2 == 0) {
        return `${numero} é PAR!`
    }
    return `${numero} é ÍMPAR!`
}


function main() {
    const resultado = verificarImparPar(2);
    console.log(resultado);
}

main();