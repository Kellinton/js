const pessoa = {
    nome: "Ace",
    idade: 19,
}

// Chamando a função falar diretamente (sem contexto específico)
falar("Oláá");
// Resultado: "Oláá undefined", pois "this.nome" não está definido no escopo global

// Usando apply para chamar a função falar com o contexto de 'pessoa'
falar.apply(pessoa, ['Oláááa']);
// Resultado: "Oláááa Ace", pois apply permite definir o contexto (this) como 'pessoa'

// Usando call para chamar a função falar com o contexto de 'pessoa'
falar.call(pessoa, 'Oláááááá');
// Resultado: "Oláááááá Ace", semelhante ao apply, call também define o contexto como 'pessoa'



// Exemplos de contexto em chamadas de função