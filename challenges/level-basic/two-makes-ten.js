function verificarNumero(a, b) {
    if ((a === 10) || (b === 10)) {
        return true;
    }
    if(a + b === 10) {
        return true;
    }
    return false
}

function main() {
    const resultado = verificarNumero(1, 9);
    console.log(resultado)
}

main();

// função que receba dois argumentos. 
// Ambos os argumentos são inteiros, a e b.
//  Retorna verdadeiro se um deles for 10 ou se a soma for 10.