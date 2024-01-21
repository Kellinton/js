/* 
Faça um algoritmo que receba o Ano de Nascimento de uma pessoa
e o ano atual. Calcule e mostre : A idade Atual dessa pessoa e 
quantos anos essa pessoa terá em 2019.
*/

class Pessoa {
    nome;
    anoNascimento;

    constructor(nome, anoNascimento){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    calcularIdadeAtual() {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const idadeAtual = anoAtual - this.anoNascimento;

        return idadeAtual;
    }

    calcularIdadeEm2019(){
        const idadeEm2019 = 2018 - this.anoNascimento;

        return idadeEm2019;
    }

    exibir(){
        return `${this.nome} tem ${this.calcularIdadeAtual()} anos. Em 2018, ele(a) tinha ${this.calcularIdadeEm2019()} anos.`
    }
}

function main() {
    const fulano = new Pessoa("Fulano", 1910);
    console.log(fulano.exibir());
}

main();