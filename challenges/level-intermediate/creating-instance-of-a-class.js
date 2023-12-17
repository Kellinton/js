// criando uma classe, e instanciando com atribuição de dados

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos.`);
    }
}

const MonkeyDLuffy = new Pessoa();
MonkeyDLuffy.nome = 'Monkey D. Luffy';
MonkeyDLuffy.idade = 15;

const PortgasDAce = new Pessoa();
PortgasDAce.nome = 'Portgas D. Ace';
PortgasDAce.idade = 19;

MonkeyDLuffy.descrever()
PortgasDAce.descrever()


