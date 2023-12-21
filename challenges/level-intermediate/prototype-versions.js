// ** No JavaScript, a herança e o compartilhamento de 
// propriedades e métodos são frequentemente feitos por meio de protótipos.




// Primeira versão usando a função construtora
function Pessoa(nome, idade) {
    // 'this' refere-se à instância sendo criada, e atribui os valores fornecidos aos atributos da instância.
    this.nome = nome;
    this.idade = idade;
}

// Adicionando um método 'falar' ao protótipo da função construtora
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}

// Criando instância
const pessoa1 = new Pessoa('Alice', 25);
pessoa1.falar();



// Segunda versão usando a sintaxe de classe (ES6+)
class Pessoa {
    // O construtor é chamado automaticamente quando uma nova instância é criada.
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Adicionando um método 'falar' diretamente na classe
    falar() {
        console.log(`Meu nome é: ${this.nome}`);
    }
}

// Criando instância
const pessoa2 = new Pessoa('Alice', 25);
pessoa2.falar();


/*

Ambas as versões fazem essencialmente a mesma coisa. 
Ambas definem uma classe ou uma função construtora 
chamada Pessoa que tem propriedades nome e idade, 
e um método chamado falar que imprime uma mensagem 
no console.

Qual é a mais moderna? A segunda versão usando a
 sintaxe de classe (class) é considerada 
 mais moderna. Embora ambas as versões realizem 
 o mesmo propósito, a sintaxe de classe é uma adição 
 mais recente ao JavaScript (introduzida no ECMAScript 2015 - ES6) 
 e é mais declarativa e fácil de ler, especialmente 
 para quem está acostumado com a programação orientada a objetos
em outras linguagens. A versão com classe também oferece
uma maneira mais clara de lidar com herança e é geralmente
 preferida em código moderno.

*/