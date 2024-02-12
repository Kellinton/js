// Formas de declarar uma variável como array

const listaFrutas = Array(); // utilizando método array
// const listaFrutas = Array('Maça', 'Banana');

listaFrutas['Vermelha'] = 'Maça'; // o índice/chave pode ser qualquer coisa (Mas se for usar o método length, a ordem precisa ser númerica e bem definida. 0...)
listaFrutas['Amarela'] = 'Banana';

console.log(listaFrutas['Amarela'] + ', ' + listaFrutas['Vermelha']);

const listaFruta = []; // [] é um alias/apelido para o método Array()
// const listaFruta = ['Maça', 'Banana'];

listaFruta[0] = 'Maça';
listaFruta[1] = 'Banana';

console.log(listaFruta[0] + ', ' + listaFruta[1]);