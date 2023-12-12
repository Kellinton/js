// função para calcular prob de um minigame 

function profitableGamble(prob, premio, pagamento) {
    if (prob * premio > pagamento) {
        return true
    }
    return false
}

console.log(profitableGamble(0.2, 50, 9));





// Uma aposta lucrativa é um jogo que produz um lucro líquido positivo, 
// onde o lucro líquido é calculado da seguinte maneira: 
// resultado_líquido = probabilidade_de_ganhar * prêmio - custo_de_jogar.


