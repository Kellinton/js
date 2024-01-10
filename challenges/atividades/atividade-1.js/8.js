// Verificar se um número é maior, menor ou igual a 100;

function verificar(numero){
    if(numero > 100) {
        return `${numero} é maior que 100`;
    }else if(numero < 100){
        return `${numero} é menor que 100`; 
    }
    return `${numero} é igual a 100`;
}


function main() {
    const resultado = verificar(2);
    console.log(resultado);
}

main();