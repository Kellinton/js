//Escrever um algoritmo que lê um número desconhecido de 0 a 100 e
//informe em qual intervalo ele se encaixa: [0,25], [25,50], [50,75], [75,100].


const numero = 90;

function classificarNumero(numero) {

    
    try {      

        if (numero < 0 || numero > 100) { // verificar se número está entre 0 a 100 para poder dar continuidade.

            throw new Error(`${numero} não pode ser utilizado. Use apenas números entre 0 a 100.`);
        }

        if (numero >= 0 && numero <= 25) {

            let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

            for (let i = 0; i < numeros.length; i++) {
                if (numero === numeros[i]){

                    numeros[i] = `[ ${numeros[i]} ]`;
                }
            }

            return `
            ${numeros.join(' , ')};
            _________________________________________________________________________________________________

                                      ${numero} está no intervalo entre [ 0 ] a [ 25 ]`;
                                      
        }else if (numero >= 25 && numero <= 50) {

            let numeros = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

            for (let i = 0; i < numeros.length; i++) {
                if (numero === numeros[i]){

                    numeros[i] = `[ ${numeros[i]} ]`;
                }
            }

            return `
            ${numeros.join(' , ')};
            _________________________________________________________________________________________________

                                      ${numero} está no intervalo entre [ 25 ] a [ 50 ]`;

        }else if (numero >= 50 && numero <= 75) {

            let numeros = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

            for (let i = 0; i < numeros.length; i++) {
                if (numero === numeros[i]){

                    numeros[i] = `[ ${numeros[i]} ]`;
                }
            }

            return `
            ${numeros.join(' , ')};
            _________________________________________________________________________________________________

                                      ${numero} está no intervalo entre [ 50 ] a [ 75 ]`;

        }else if (numero >= 75 && numero <= 100) {

            let numeros = [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

            for (let i = 0; i < numeros.length; i++) {
                if (numero === numeros[i]){

                    numeros[i] = `[ ${numeros[i]} ]`;
                }
            }

            return `
            ${numeros.join(' , ')};
            _________________________________________________________________________________________________

                                      ${numero} está no intervalo entre [ 75 ] a [ 100 ]`;

        }
        
    } catch (error) {
        return error.message;
    } 

}

console.log(classificarNumero(numero));