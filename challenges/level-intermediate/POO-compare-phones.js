// Adiciona função e classe para comparar e descrever celulares

function compararCelulares(c1, c2) {
    if(c1.memoriaRAM > c2.memoriaRAM) {

        console.log(`${c1.nome}, com ${c1.memoriaRAM} GB, tem mais memória RAM do que ${c2.nome}, com ${c2.memoriaRAM} GB`);

    }else if(c2.memoriaRAM > c1.memoriaRAM) {

        console.log(`${c2.nome}, com ${c2.memoriaRAM} GB, tem mais memória RAM do que ${c1.nome}, com ${c1.memoriaRAM} GB`);

    }else{
        console.log(`${c1.nome} e ${c2.nome} tem ${c2.memoriaRAM} GB`);
    }
}

class Celular {
    nome;
    memoriaRAM;
    processador;

    constructor(nome, memoriaRAM, processador) {
        this.nome = nome;
        this.memoriaRAM = memoriaRAM;
        this.processador = processador;
    }

    descrever() {
        console.log(`${this.nome} \n ${this.memoriaRAM} \n ${this.processador}`)
    }
}

rogphone = new Celular('Asus ROG Phone 6', 8, 'Snapdragon 8 Plus Gen 1 Qualcomm');
redmagic = new Celular('Nubia Red Magic 8S PRO', 12, 'Snapdragon 8 Plus Gen 2 Qualcomm');

compararCelulares(rogphone, redmagic);