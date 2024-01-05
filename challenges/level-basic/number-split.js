function retornarArray(numero) {
    let a = Math.floor(numero / 2);
    let b = numero - a
    let array = [];

    array.push(a, b);

    return array;

}

const resultado = retornarArray(11);
console.log(resultado);

// retornando um array contendo as duas metades do número informado
