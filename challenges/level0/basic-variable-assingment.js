// challenge 18

// Um aluno aprendendo JavaScript estava tentando fazer 
// uma função. Seu código deve concatenar um nome de 
// cadeia de caracteres passado com a cadeia de caracteres 
// "Edabit" e armazená-lo em uma variável chamada result. 
// Ele precisa da sua ajuda para corrigir esse código.

function nomeString(nome) {
    let org = "Edabit";
    let resultado = `${nome} ${org}`;

    return resultado;

}

console.log(nomeString('pessoa'));