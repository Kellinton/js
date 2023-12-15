function calcularIMC(peso, altura) {

    return peso / (Math.pow(altura, 2));

}

function classificarIMC(calculoIMC) {

    if(calculoIMC < 18.5){

       return `IMC: ${calculoIMC.toFixed(2)}, está Abaixo do peso!`
    
    }else if(calculoIMC >= 18.5 && calculoIMC <= 25){

       return `IMC: ${calculoIMC.toFixed(2)}, está com Peso normal!`
    
    }else if(calculoIMC >= 25 && calculoIMC <= 30){
    
       return `IMC: ${calculoIMC.toFixed(2)}, está Acima do peso!`
    
    }else if(calculoIMC >= 30 && calculoIMC <= 40){
    
       return `IMC: ${calculoIMC.toFixed(2)}, está Obeso!`
    
    }else{
    
       return `IMC: ${calculoIMC.toFixed(2)}, está com Obesidade grave!`
    
    }
}

function main() {

    const peso = 120;
    const altura = 1.77;

    const calculoIMC = calcularIMC(peso, altura);
    console.log(classificarIMC(calculoIMC));

}

main();


/*

Math.pow(base, expoente)

Formula IMC:
IMC = peso / (altura * altura)

Elaborar um algoritmo que dado o peso e a altura de um adulto,
mostre sua condição de acordo com a tabela abaixo.

IMC Condição:

- Abaixo de 18.5 (Abaixo do Peso)
- Entre de 18.5 e 25 (Peso Normal)
- Entre 25 e 30 (Acima do Peso)
- Entre 30 e 40 (Obeso)
- Acima de 40 (Obesidade Grave)

*/

