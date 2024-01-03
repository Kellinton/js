// função que pega uma matriz de números e retorna 
// os números mínimo e máximo, nessa ordem.


// Com objetos 

function minMax(array) {
    valorMinMax = {
        Máximo: 0,
        Mínimo: array[0]
    }

    for (let i = 0; i < array.length; i++) {
       
        if(array[i] <= valorMinMax.Mínimo) {
            valorMinMax.Mínimo = array[i]
        }
        if(array[i] >= valorMinMax.Máximo) {
            valorMinMax.Máximo = array[i]
        }

    }

    return valorMinMax
        

}


function main() {

    const resultado = minMax([10, 5, -2, -50, 2])

    console.log(resultado)
    
}

main();




// Segunda Forma

// function minMax(array) {
//     let valorMinimo = array[0];
//     let valorMaximo = 0;

//     for (let i = 0; i < array.length; i++) {

//         if(array[i] <= valorMinimo) {
//             valorMinimo = array[i];
//         }
        
//         if(array[i] >= valorMaximo) {
//             valorMaximo = array[i];
//         }  
//     }
//     return `Valor Máximo: ${valorMaximo}
// Valor Mínimo: ${valorMinimo}`
// }


// const resultado = minMax([9, 20, 50, -11, 10]);

// console.log(resultado);




