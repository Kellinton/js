function dividir(a, b) {
    let resto = a % b
    if (resto == 0) {
        return true;
    }
    return false;
}

const resultado = dividir(4, 2);
console.log(resultado);

// Dados dois inteiros, A e B, função que retorna verdadeiro se A 
// puder ser dividido igualmente por B. Caso contrário, retorna falso