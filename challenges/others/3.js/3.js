//Crie um algoritmo que solicite ao usuário a quantia de dinheiro
//que ele possui e sugira uma atividade com base nessa quantia.
//Se o valor for igual ou superior a R$ 10,00, sugira que ele
//vá ao cinema; caso contrário, sugira que ele fique em casa vendo TV.

const caixa = 10;

function sugerirAtividade(caixa) {
    if(caixa >= 10) {
        return `Com R$ ${caixa}, eu sugiro que você vá ao cinema assistir a um filme.`
    }else {
        return `Com R$ ${caixa}, eu sugiro que você fique em casa ver TV, e economizar para uma outra oportunidade ir ao cinema.`
    }
}

console.log(sugerirAtividade(caixa));
