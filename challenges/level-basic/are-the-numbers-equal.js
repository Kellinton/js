// challenge 24

let n1 = 9;
let n2 = 9;
const resultado = compararNumero(n1, n2);


function compararNumero(a, b) {
    if(a === b) {
        return true;
    }else{
        return false;
    }
}

function imprimirResultado() {

    if(n1 > n2) {
        console.log(`${resultado}, porque ${n1} é maior do que ${n2}.`)
    }else if(n1 < n2){
        console.log(`${resultado}, porque ${n1} é menor do que ${n2}.`)
    }else if(n1 === n2){
        console.log(`${resultado}, ${n1} e ${n2} são iguais.`)
    }

}


console.log(imprimirResultado());