function aplicarDesconto(valor, desconto) {

    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {

    return valor + (valor * (juros / 100));
}

(function() { // função IIFE

    const precoEtiqueta = 100;
    const formaDePagamento = 1;

    function visualizarFormaDePagamento(formaDePagamento) {

    
        switch (formaDePagamento) {
            case 1:                                   // [1] À vista Débito, recebe 10% de desconto;
        
                console.log(`Valor pago R$: ${aplicarDesconto(precoEtiqueta, 10)}`);
        
                break; 
            case 2:                                   // [2] À vista no Dinheiro ou PIX , recebe 15% de desconto;
        
                console.log(`Valor pago R$: ${aplicarDesconto(precoEtiqueta, 15)}`);
        
                break;
            case 3:                                   // [3] Em duas vezes, preço normal de etiqueta sem juros;
                       
                console.log(`Valor pago R$: ${precoEtiqueta}`);
                    
                break;
            case 4:                                   // [4] Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
                  
                console.log(`Valor pago R$: ${aplicarJuros(precoEtiqueta, 10)}`);
                
                break;
            default:
        
                console.log('Opção inválida!');
        
                break;
        }
    
    }

    visualizarFormaDePagamento(formaDePagamento);

})();







/*

função que calcula o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento

Condições de pagamento:

- [1] À vista Débito, recebe 10% de desconto;
- [2] À vista no Dinheiro ou PIX , recebe 15% de desconto;
- [3] Em duas vezes, preço normal de etiqueta sem juros;
- [4] Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/