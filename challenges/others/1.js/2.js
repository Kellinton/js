// Calcular média de três números/notas 

class Aluno {
    nome;
    notas;

    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    
    calcularMedia(){
        let soma = 0;
        let media = 0;

        for (let i = 0; i < this.notas.length; i++) {

            soma += this.notas[i];

        }
        media = (soma / this.notas.length);

        return `A média de ${this.nome} é: ${media}`;
    }
}

function main() {
    const Fulano = new Aluno("Fulano", [5, 8, 10, 10]);
    console.log(Fulano.calcularMedia());
}

main();
