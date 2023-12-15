// função que retorna o nome e se é maior ou menor de idade


function escreverNome(nome) {
    return 'Nome: ' + nome;
}

function verificarIdade(idade) {
    if(idade >= 18) {
        return 'Maior';
    }else{
        return 'Menor';
    }
}

function main(){
    const nome = 'Ace';
    const idade = 11;

    console.log(escreverNome(nome));
    console.log(verificarIdade(idade));
}

main();