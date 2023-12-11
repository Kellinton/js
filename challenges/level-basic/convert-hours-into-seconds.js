// challenge 9

function calcularHorasParaMinutos(hora) {

    const segundos = 60;
    const minutos = 60;

    return (hora * minutos) * segundos;
}

let horas = 2;
let resultado = calcularHorasParaMinutos(horas);

console.log(`${horas} horas são ${resultado} segundos`);