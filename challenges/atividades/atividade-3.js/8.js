// Faça um Algoritmo que receba a idade de uma pessoa e mostre a mensagem de Maioridade ou não.

const idade = 18;
const calcular = (idade) => {
    if(idade >= 18) {
        return `De maior`;
    }else{
        return `De menor`;
    }
}

console.log(calcular(idade));

