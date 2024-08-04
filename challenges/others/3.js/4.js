//Uma empresa decidiu conceder um aumento de 30%
//para os funcionários que possuem salário inferior
//a R$ 600,00. Desenvolva um algoritmo que receba o
//salário de um funcionário e exiba o valor do salário
//reajustado, ou exiba uma mensagem informando que o
//funcionário não tem direito ao aumento.


class Funcionario {
    nome;
    salario;

    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    aumentoSalarial() {
        const aumento = (30 / 100);

        if(this.salario <= 600) {
            const novoSalario = this.salario + (this.salario * aumento);
            return `
            ${this.nome}. Você recebeu um aumento de 30%. 
            Seu novo salário é R$ ${novoSalario}`
        } else{
            return `
            Desculpe, ${this.nome}. Você não foi contemplado com o aumento salarial de 30%. 
            Seu salario continua sendo R$ ${this.salario}`
        }
    }
}

const fulano = new Funcionario('Fulano', 600);
const ciclano = new Funcionario('Ciclano', 601);

console.log(fulano.aumentoSalarial());
console.log(ciclano.aumentoSalarial());


