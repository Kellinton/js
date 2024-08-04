// Verificar se um número é maior, menor ou igual a zero;

function verificar(numero){
    if(numero > 0) {
        return `${numero} é maior que 0`;
    }else if(numero < 0){
        return `${numero} é menor que 0`; 
    }
    return `${numero} é igual a 0`;
}


function main() {
    const resultado = verificar(2);
    console.log(resultado);
}

main();