// Elabore um algoritmo que receba um número e, caso a metade desse número seja maior que cinquenta, exiba a metade. Caso contrário, não exiba nada.


const numero = 200;

function verificarNumero(numero) {
    if((numero/2) > 50){
        return numero / 2;
    }else{
        return "Sem resultado";
    }
}

let resultado = verificarNumero(numero);
console.log(resultado);

