// Programa que calcula o valor de uma viagem

// 1. Preço do etanol;
// 2. Preço da gasolina;
// 3. O tipo de combustível que está no carro;
// 4. Gasto médio do combustível do carro;
// 5. Distância em KM da viagem;

// Imprimir o valor que será gasto na viagem


// área de entrada de dados
const precoEtanol = 5.79;
const precoGasolina = 6.50;
const tipoCombustivel = 'Etanol';
const kmPorLitros = 10;
const distanciaEmKm = 100;

// area de processamento
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'Etanol'){ // etanol
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`Valor gasto: R$ ${valorGasto.toFixed(2)}`);

}else{ //gasolina
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`Valor gasto: R$ ${valorGasto.toFixed(2)}`);
}


