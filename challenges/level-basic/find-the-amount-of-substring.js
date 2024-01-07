
// função para retornar a quantidade de uvas que existem em uma string.


function filtrar(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        // Verifica se a substring a partir da posição atual contém "uva".
        if(texto.includes("uva", i)) {
            contador++;
        // Move a posição atual para a próxima letra após a última ocorrência de "uva" para evitar sobreposições.    
            i += "uva".length - 1;
        }
    }

    return contador;
}

const resultado = filtrar("uvauvauva");
console.log(resultado);

