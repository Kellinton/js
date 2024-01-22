// lista utilizando map, filter e join

const listaNomes = [{ nome: 'Renan' }, { nome: 'Andressa' }, { nome: 'Vitor' }, { nome: 'Amanda' } ];

listaNomes.map(e => e.nome) // pegando apenas o nome
          .filter((e) => e.startsWith('A')) // retornando apenas nomes que comecem com a letra A
          .join(', ') // separando cada elemento da lista com a vírgula ', '


console.log(listaNomes.map(e => e.nome)
          .filter((e) => e.startsWith('A'))
          .join(', '));