// chamar uma função que tem uma outra função que foi passada como parâmetro.

function FalarMeuNome() {
    console.log('Meu nome é Ace');
}

function FalarMeuNomeCompleto(FalarMeuNome) {
    FalarMeuNome();
    console.log('Portgas D. Ace');
    return FalarMeuNome
}

FalarMeuNomeCompleto(FalarMeuNome)()