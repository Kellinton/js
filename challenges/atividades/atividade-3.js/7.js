// Crie um algoritmo que receba um número e mostre o número e o seu dobro somente quando o número for maior que noventa e menor que cem.
const valor = 91;

function mostrarDobro(valor) {
    if(valor > 90 && valor < 100) {
        return `
        O dobro de ${valor} é: ${valor * 2}`
    }

    return valor;
}

console.log(mostrarDobro(valor));
