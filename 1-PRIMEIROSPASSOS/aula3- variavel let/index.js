// usando let com concatenação normal

let nome = 'João';

console.log( nome ,'nasceu em 1994.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log( nome, 'casou-se com Maria em 2012.');

console.log('---------------------------------------------');

// usando let com Template String `${}`

let nome2 = 'Maria';

console.log( `${nome2} ${'nasceu em 1994.'}`);
console.log(`${'Em 2000,'} ${nome2} ${'conheceu Maria.'}`);
console.log( `${nome2} ${'casou-se com Maria em 2012.'}`);

console.log('---------------------------------------------');

// Variável sem inicialização

let nome3; //retorna undefined porque a variável não foi declarada
console.log(`${'Qual é o meu retorno?'} ${nome3}`);//undefined

console.log('---------------------------------------------');

// Variável inicializada
let nome4 = "Marcos";
console.log(`${'Qual é o meu retorno:'} ${nome4}`);//Marcos


