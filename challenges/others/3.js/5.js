//Escreva um algoritmo que verifique a validade de uma senha
//fornecida pelo usuário. A senha válida é "4531". O algoritmo
//deve exibir uma mensagem indicando se o acesso é permitido ou não.

const senha = 4531;


function verificarSenha(senha) {
    if (senha === 4531) {
        return `Acesso permitido.`;
    } else{
        return `Acesso negado.`;
    }
}

console.log(verificarSenha(senha));

