/*

Algoritmo que calcula o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento

Condições de pagamento:

- [1] À vista Débito, recebe 10% de desconto;
- [2] À vista no Dinheiro ou PIX , recebe 15% de desconto;
- [3] Em duas vezes, preço normal de etiqueta sem juros;
- [4] Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const precoEtiqueta = 100;
const formaDePagamento = 4;


switch (formaDePagamento) {
    case 1:                                   // [1] À vista Débito, recebe 10% de desconto;

        valorPago = precoEtiqueta - (precoEtiqueta * 0.1);

        console.log(`Valor pago R$: ${valorPago}`);

        break; 
    case 2:                                   // [2] À vista no Dinheiro ou PIX , recebe 15% de desconto;
   
        valorPago = precoEtiqueta - (precoEtiqueta * 0.15);

        console.log(`Valor pago R$: ${valorPago}`);

        break;
    case 3:                                   // [3] Em duas vezes, preço normal de etiqueta sem juros;
       
        valorPago = precoEtiqueta;
            
        console.log(`Valor pago R$: ${valorPago}`);
            
        break;
    case 4:                                   // [4] Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

        valorPago = precoEtiqueta + (precoEtiqueta * 0.1);
            
        console.log(`Valor pago R$: ${valorPago}`);
        
        break;
    default:

        console.log('Opção inválida!');

        break;
}
