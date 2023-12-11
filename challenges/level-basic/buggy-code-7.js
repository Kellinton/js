// challenge 21

function trocar(a, b) {

    x = a
    a = b
    b = x
    
    return [a, b]
}

console.log(trocar(2, 5));