/*
          Coletando Tesouros

Algoritmo que percorre cada sala e verifica
se há tesouros ou monstros. Se você encontrar 
um tesouro, colecionará a recompensa. Se encontrar 
um monstro, terá que derrotá-lo para continuar.


*/

// Entrada de dados.
const totalSalas = 8;

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//.includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//condição para verificar e exibir se há tesouro na sala e se há montro na sala:
    if ( temTesouro ) {
        console.log("Tesouro na sala " + sala + "!");
    } else if ( temMonstro ) {
        console.log("Monstro na sala " + sala + "!");
    }
}