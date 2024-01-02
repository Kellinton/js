

function adicionarNumero(numero) {

    let somador = 0;

    for (let i = 1; i <= numero; i++) {

        somador += i
    
        process.stdout.write(" +");
        process.stdout.write(i.toString());
        
    }

    process.stdout.write(" = ");

    return somador;

}

const resultado = adicionarNumero(13);

console.log(resultado);


// função que receba um número como argumento. 
// Some todos os números de 1 ao número que você
// passou para a função. Por exemplo, se a entrada 
// for 4, sua função deverá retornar 10
//  porque 1 + 2 + 3 + 4 = 10.