// Array multidimensional é um array que contém um ou mais arrays na sua estrutura


// Array

const frutas = Array();

frutas[0] = 'Banana';
frutas[1] = 'Maçã';

// Array Multidimensional

const alimentos = Array();

alimentos['frutas'] = Array(); // 1º array de alimentos
alimentos['comidas'] = []; // 2º array de alimentos

alimentos['frutas'][0] = 'Maçã';
alimentos['comidas'][0] = 'Arroz';
alimentos['frutas'][1] = 'Banana';
alimentos['comidas'][1] = 'Feijão';

console.log(alimentos['frutas'][0] + ', ' + alimentos['comidas'][1]);

