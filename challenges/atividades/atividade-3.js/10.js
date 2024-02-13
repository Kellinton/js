//Um determinado clube de futebol pretende classificar seus atletas
// em categorias e para isto ele contratou um programador
// para criar um programa que executasse esta tarefa.
//Para isso o clube criou uma tabela que continha a
//faixa etária do atleta e sua categoria. A tabela está demonstrada abaixo:

//IDADE CATEGORIA
//De 05 a 10 Infantil
//De 11 a 15 Juvenil
//De 16 a 20 Junior
//De 21 a 25 Profissional

//Construa um programa que solicite o nome e a idade
// de um atleta e imprima a sua categoria.

class Atleta {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    obterCategoria() {
        const idade = this.idade;

        if(idade >= 5 && idade <= 10){
            return 'Infantil';
        }else if(idade >= 11 && idade <= 15){
            return 'Juvenil';
        }else if(idade >= 16 && idade <= 20){
            return 'Junior';
        }else if(idade >= 21 && idade <= 25){
            return 'Profissional';
        }else{
            throw new Error('A idade informada não se enquadra em nenhuma das categorias.')
        }

    }

    exibir() {
        try {
            const categoria = this.obterCategoria();     
            const nome = this.nome;
            const idade = this.idade;

            return `${nome} tem ${idade} anos e está na categoria: ${categoria}`;

        } catch (error) {
            return error.message
        }
    }
}

const fulano = new Atleta('Fulano', 77);
console.log(fulano.exibir());
