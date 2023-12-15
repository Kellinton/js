// Calcular a média de 3 notas de um aluno com array básico

// Classificação:

// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;




const notas = [8, 8, 8];
const media = (notas[0] + notas[1] + notas[2]) / 3;



if(media < 5){

    console.log(`Média: ${media}`);
    console.log('---------------------');
    console.log('Que pena, você foi reprovado!');

}else if(media >= 5 && media <= 7){

    console.log(`Média: ${media}`);
    console.log('---------------------');
    console.log('Você está de recuperação!');

}else{ // maior que 7

    console.log(`Média: ${media}`);
    console.log('---------------------');
    console.log('Parabéns, você passou!');

}