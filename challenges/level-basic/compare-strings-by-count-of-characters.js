// a function that takes two strings as arguments 
// and return either true or false depending on whether 
// the total number of characters in the first string is
//  equal to the total number of characters in the second string.


function compararNumeroCaracter(primeiraString, segundaString) {
    if(primeiraString.length === segundaString.length) {
        return true;
    }
    return false;
}



const resultado = compararNumeroCaracter("Olá", "ola")

console.log(resultado);