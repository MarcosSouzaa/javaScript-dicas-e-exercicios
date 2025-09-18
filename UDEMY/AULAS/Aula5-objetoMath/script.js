//OBJETO MATH (MATEMÁTICA) - CONSULTAR A BIBLIOTECA P/ DETALHES

let num1 = 9.5465228;
//floor - chão, Arredonda para baixo
let num2 = Math.floor(num1);
console.log(num2); //9

//ceil - teto, Arredonda pra cima
num2 = Math.ceil(num1);
console.log(num2);//10

//round - arredondar, arredonda p/cima nº após a virgula >= 5
num2 = Math.round(num1);
console.log(num2);//10

num1 = 9.456865;
//round - arredondar, arredonda p/cima nº após a virgula < 5
num2 = Math.round(num1);
console.log(num2);//9

//max - máximo, escolhe o maior número
console.log(Math.max(1, 6, 5, 3, 1500, 1499, -10, 1501, 1, -1601)); 1501
//min - mínimo, escolhe o menor número da sequência
console.log(Math.min(1, 6, 5, 3, 1500, 1499, -10, 1501, 1, -1601));//-
//Gerar um número aleatório entre 0 e 1
console.log(Math.random());//0.24375715931496966, vai mudar sempre

// EXEMPLOS COM Math.random();
const aleatorio = Math.round(Math.random() * (10 - 1) + 1);
console.log(aleatorio);

//Pegando o valor do PI
console.log(Math.PI);

//Duas formas para Potenciação
// 2 elevado a 10 usando Math
console.log(Math.pow(2, 10));//1024

// 2 elevado a 10 usando **
console.log(2 ** 10);//1024

//Raiz quadrada sem uso do objeto
let num7 = 9;
console.log(num7 ** (1 / 2));//3
//Outra forma
console.log(num7 ** 0.5);//3

//CUIDADO!!!!!
//DIVISÃO POR ZERO NÃO VAI GERAR ERRO, VAI RETORNAR INFINITY

console.log(100 / 0);// Infinity









