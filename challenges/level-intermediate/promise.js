// assincronismo com promise

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 5000)
})

console.log('Loading...');

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value);
        return value + 10
    })
    .then((value) => {
        console.log(value);
    })
    .catch((erroor) => {
        console.error(erroor);
    })
    .finally(() => {
        console.log('Encerrado.');
    })
