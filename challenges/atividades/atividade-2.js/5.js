/*
Faça um algoritmo que receba o nome, o salário de um funcionário e o percentual de aumento.
Calcule e mostre o novo salário.
*/

class Funcionario {
    nome;
    salario;
    percentual;

    constructor(nome, salario, percentual){
        this.nome = nome;
        this.salario = salario;
        this.percentual = percentual;
    }

    calcularPercentual(){
        return this.salario + (this.salario * (this.percentual / 100));
    }

    exibir(){
        return `Salário de ${this.nome}: R$ ${this.calcularPercentual()}`
    }

}

const Fulano = new Funcionario("Fulano", 1000, 20);
console.log(Fulano.exibir());