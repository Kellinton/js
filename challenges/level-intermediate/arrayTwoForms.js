// Formas de declarar uma variável como array

const listaFrutas = Array(); // utilizando método array

listaFrutas['Vermelha'] = 'Maça'; // o índice/chave pode ser qualquer coisa (geralmente é número)
listaFrutas['Amarela'] = 'Banana';

console.log(listaFrutas['Amarela'] + ', ' + listaFrutas['Vermelha']);

const listaFruta = []; // [] é um alias/apelido para o método Array()

listaFruta[0] = 'Maça';
listaFruta[1] = 'Banana';

console.log(listaFruta[0] + ', ' + listaFruta[1]);