/*

Faça um algoritmo que receba o salário base de um funcionário. Calcule e mostre o salário a receber,
sabendo que esse funcionário tem uma gratificação de 5% sobre o salário-base e paga imposto de 7%
sobre o salário-base.

*/

class Funcionario {
    nome;
    salario;

    constructor(nome, salario) {
        this.nome = nome,
        this.salario = salario
    }
    calcularSalarioParaReceber(){

        const aumento = 5 / 100;
        const imposto = 7 / 100;
        let salarioBase = this.salario;
        let novoSalario = 0;

        
        salarioBase = salarioBase + (salarioBase * aumento);
        salarioBase = salarioBase - (salarioBase * imposto);
        novoSalario = salarioBase;

        return novoSalario;
        

    }
    exibir() {
        return `O novo salário de ${this.nome} é: R$ ${this.calcularSalarioParaReceber()}`
    }
}

function main(){
    const fulano = new Funcionario("Fulano", 1000);
    console.log(fulano.exibir());
}
main();

