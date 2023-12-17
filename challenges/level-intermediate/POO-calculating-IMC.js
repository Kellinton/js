/*
   adiciona a classe "Pessoa" que inclui métodos 
   para calcular e classificar o Índice de Massa 
   Corporal (IMC) com base na altura e peso.

*/

class Pessoa {
    nome;
    altura;
    peso;

    calcularIMC() {
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarIMC() {
        const calculoIMC = this.calcularIMC();

        if(calculoIMC < 18.5){

            return `\n ${this.nome}, seu IMC é: ${calculoIMC.toFixed(2)}. \n\n    Você está Abaixo do peso!`
         
         }else if(calculoIMC >= 18.5 && calculoIMC <= 25){
     
            return `\n ${this.nome}, seu IMC é: ${calculoIMC.toFixed(2)}. \n\n    Você está com Peso normal!`
         
         }else if(calculoIMC >= 25 && calculoIMC <= 30){
         
            return `\n ${this.nome}, seu IMC é: ${calculoIMC.toFixed(2)}. \n\n    Você está Acima do peso!`
         
         }else if(calculoIMC >= 30 && calculoIMC <= 40){
         
            return `\n ${this.nome}, seu IMC é: ${calculoIMC.toFixed(2)}. \n\n    Você está Obeso!`
         
         }else{
         
            return `\n ${this.nome}, seu IMC é: ${calculoIMC.toFixed(2)}. \n\n    Você está com Obesidade grave!`
         
         }
    }

}

const Luffy = new Pessoa();
Luffy.nome = 'Luffy';
Luffy.altura = 1.80;
Luffy.peso = 120;

const Ace = new Pessoa();
Ace.nome = 'Ace';
Ace.altura = 1.80;
Ace.peso = 60;


console.log(Luffy.classificarIMC());
console.log(Ace.classificarIMC());





