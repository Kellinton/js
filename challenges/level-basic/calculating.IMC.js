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

const peso = 120;
const altura = 1.80;

const calculoIMC = peso / (Math.pow(altura, 2));



if(calculoIMC < 18.5){

    console.log(`IMC: ${calculoIMC.toFixed(2)}`);
    console.log('Abaixo do peso!');

}else if(calculoIMC >= 18.5 && calculoIMC <= 25){

    console.log(`IMC: ${calculoIMC.toFixed(2)}`);
    console.log('Peso normal!');

}else if(calculoIMC >= 25 && calculoIMC <= 30){

    console.log(`IMC: ${calculoIMC.toFixed(2)}`);
    console.log('Acima do peso!');

}else if(calculoIMC >= 30 && calculoIMC <= 40){

    console.log(`IMC: ${calculoIMC.toFixed(2)}`);
    console.log('Obeso!');

}else{

    console.log(`IMC: ${calculoIMC.toFixed(2)}`);
    console.log('Obesidade grave!');

}