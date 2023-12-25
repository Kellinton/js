// Definindo uma função chamada soma que recebe um parâmetro x
function soma(x) {
    // Retorna outra função que recebe um parâmetro y
    return function (y) { // função interna 
        // Retorna a soma de x e y
        return x + y;
    }
}

console.log(soma(10)(20));

// Closures referem-se à capacidade de uma função interna 
// acessar as variáveis de sua função externa, mesmo após 
// a função externa ter retornado. Neste caso, a função 
// interna mantém acesso à variável x, mesmo após a 
// conclusão da execução da função externa soma. Isso 
// permite criar funções que "lembram" o escopo em que foram criadas.

