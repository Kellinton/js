// criando uma classe, e instanciando com atribuição de dados

// Definindo uma classe Pessoa com propriedades 'nome' e 'idade' e um método 'descrever'
class Pessoa {
    nome;
    idade;

    // Método para imprimir uma descrição da pessoa
    descrever() {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos.`);
    }
}

// Criando uma instância da classe Pessoa para Monkey D. Luffy
const MonkeyDLuffy = new Pessoa();
MonkeyDLuffy.nome = 'Monkey D. Luffy';
MonkeyDLuffy.idade = 15;

// Criando outra instância da classe Pessoa para Portgas D. Ace
const PortgasDAce = new Pessoa();
PortgasDAce.nome = 'Portgas D. Ace';
PortgasDAce.idade = 19;

// Chamando o método 'descrever' para imprimir informações sobre Monkey D. Luffy
MonkeyDLuffy.descrever();

// Chamando o método 'descrever' para imprimir informações sobre Portgas D. Ace
PortgasDAce.descrever();


