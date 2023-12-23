// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function calcularAreaRetangulo(base, altura) {
    if(base >= 1 && altura >= 1) {
        return base * altura;
    }
    return -1;
}

const res =  calcularAreaRetangulo(1, 2)

console.log(res);