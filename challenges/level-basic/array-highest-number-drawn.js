const numeros = [];
    let numeroSorteado = 0;

    numeros.push(5);
    numeros.push(50);
    numeros.push(10);
    numeros.push(98);
    numeros.push(25);

    for (let i = 0; i < numeros.length; i++) {

        const numero = numeros[i];
        
        if(numero > numeroSorteado) {

            numeroSorteado = numero
        }

}

    console.log(numeroSorteado);