/*

Pedro comprou um saco de ração com peso em quilos. Pedro possui 2 (dois) gatos
para os quais fornece a quantidade de ração em gramas. Faça um algortimo que receba
o peso do saco de ração e a quantidade de ração fornecida para cada gato.
Calcule e mostre quanto restará de ração no saco após 5 (cinco) dias

*/
let racaoInicial = 200; // kilos
let gatoUm = 40; // gramas
let gatoDois = 80; // gramas

function calcularRacao(racaoInicial, gatoUm, gatoDois, tempoCallback) {
    console.log(`
    Calculando...
    `);

    setTimeout(() => {
        const resultado = {
            racaoFinal: racaoInicial - (gatoUm + gatoDois) * 5,
            racaoConsumida: (gatoUm + gatoDois) * 5
        };

        tempoCallback(resultado);
    }, 2000);
}

calcularRacao(racaoInicial, gatoUm / 1000, gatoDois / 1000, (resultado) => {
    console.log(`
    Ração consumida pelos gatos: ${resultado.racaoConsumida} KG
    ------------------ // ----------------
    Ração que restou: ${resultado.racaoFinal} KG
    `);
});
