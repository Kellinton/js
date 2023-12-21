
// Definindo um objeto 'pessoa' com a propriedade 'genero'
const pessoa = {
    genero: 'Masculino'
}

// Definindo um objeto 'anime' com a propriedade 'shounen'
const anime = {
    shounen: 'One Piece'
}

// Criando um objeto 'ace' que tem propriedades próprias, como 'nome' e 'idade', 
// e herda propriedades dos objetos 'pessoa' e 'anime' através do protótipo.
const ace = {
    nome: 'Ace',
    idade: 19,
    __proto__: { pessoa, anime } 
}

// Imprimindo o objeto 'ace', incluindo suas propriedades próprias e as herdadas.
console.log(ace);

// Acessando a propriedade 'genero' do protótipo 'pessoa' no objeto 'ace'.
console.log(ace.pessoa.genero); 

// Acessando a propriedade 'shounen' do protótipo 'anime' no objeto 'ace'.
console.log(ace.anime.shounen);