// Faça um algoritmo que receba o nome, e o salário
// de um funcionário. Calcule e mostre o nome do
// funcionário e o seu novo salário, sabendo-se que
// este sofreu um aumento de 15%

class Funcionario {
    nome;
    salario;

    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

    calcularAumento(){
        return this.salario + (this.salario * (15 / 100));
    }

    exibir(){
        return `Salário de ${this.nome}: R$ ${this.calcularAumento()}`
    }

}

const Fulano = new Funcionario("Fulano", 1000);
console.log(Fulano.exibir());

