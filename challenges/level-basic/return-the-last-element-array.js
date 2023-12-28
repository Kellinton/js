function retornarUltimoElementoArray(array) {
    return array.pop();
}


const array = [1, 2, 3, 4, 5, 6, 7];
const resposta = retornarUltimoElementoArray(array);

console.log(resposta);