// Definindo uma função construtora Pessoa
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Adicionando um método 'falar' ao protótipo da função construtora
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}

// Criando um objeto 'ace' que tem uma propriedade 'genero'
const ace = {
    genero: 'Masculino'
}

// Chamando a função construtora Pessoa com 'ace' como contexto ('this') e fornecendo valores 'Ace' e 19 como argumentos.
Pessoa.call(ace, 'Ace', 19);

// Imprimindo o objeto 'ace', que agora possui propriedades 'nome' e 'idade' devido à chamada da função construtora.
console.log(ace);