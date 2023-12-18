/*
   adiciona a classe "Pessoa" que inclui métodos 
   para calcular e classificar o Índice de Massa 
   Corporal (IMC) com base na altura e peso.

*/

class Pessoa {
   nome;
   peso;
   altura;

   constructor(nome, peso, altura) {
       this.nome = nome;
       this.peso = peso;
       this.altura = altura;
   }

   calcularIMC(){

       return this.peso / Math.pow(this.altura, 2);
   }

   classificarIMC() {

       if(this.calcularIMC() < 18.5){

           return `IMC: ${this.calcularIMC().toFixed(2)}, está Abaixo do peso!`
        
        }else if(this.calcularIMC() >= 18.5 && this.calcularIMC() <= 25){
    
           return `IMC: ${this.calcularIMC().toFixed(2)}, está com Peso normal!`
        
        }else if(this.calcularIMC() >= 25 && this.calcularIMC() <= 30){
        
           return `IMC: ${this.calcularIMC().toFixed(2)}, está Acima do peso!`
        
        }else if(this.calcularIMC() >= 30 && this.calcularIMC() <= 40){
        
           return `IMC: ${this.calcularIMC().toFixed(2)}, está Obeso!`
        
        }else{
        
           return `IMC: ${this.calcularIMC().toFixed(2)}, está com Obesidade grave!`
        
        }
   }

}

const luffy = new Pessoa('Luffy', 70, 1.75);
const ace = new Pessoa('Ace', 70, 1.75);


console.log(luffy.classificarIMC());
console.log(ace.classificarIMC());

