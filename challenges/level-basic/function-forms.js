// formas de declarar uma função.

// Function Declaration
function primeiraForma() {

    console.log('Primeira Forma');
}


// Function Expression
const segundaForma = function () {

    console.log('Segunda Forma');
}

primeiraForma();
segundaForma();



// Representação de como o código acima será interpretado. Com o Hoisting:

/*

// Function Declaration
function primeiraForma() {

    console.log('Primeira Forma');
}

// Function Expression
const segundaForma; //  declaração com hoisting

segundaForma = function () { //  atribuição não é afetada pelo hoisting
    
    console.log('Segunda Forma');
}


*/