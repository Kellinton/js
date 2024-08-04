// Escreva um programa que leia um número inteiro. Se o número lido for positivo, escreva uma mensagem indicando se ele é par ou ímpar. Se o número for negativo, escreva a seguinte mensagem “Este número não é positivo”.

const numero = 7;

function verificarNumero(numero) {
    if(Math.sign(numero) == 1){
        if(numero % 2 == 0){
            return `${numero} é Positivo e Par!`;
        }else{
            return `${numero} é Positivo e Ímpar!`;
        }
    }else if(numero == 0){
        return `${numero} é neutro!`;
    }else{
        return `${numero} é Negativo!`;
    }
}

console.log(verificarNumero(numero));