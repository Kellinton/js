// Create a function that takes a string txt 
// and a number n and returns the repeated string n number of times.

function repetirString (txt, n) {
    if(typeof txt === "string") {   
        return txt.repeat(n); 
    }
    return "Não é uma String";
}

const resultado = repetirString("texto", 10);

console.log(resultado);



