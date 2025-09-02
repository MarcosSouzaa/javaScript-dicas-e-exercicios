const primeiroNúmero = '5';
const segundoNúmero = 10;
const resultado = primeiroNúmero * segundoNúmero;

console.log(`${primeiroNúmero}${'X'}${segundoNúmero} ${'='} ${resultado}`);

console.log(typeof primeiroNúmero);// verifica qual é o tipo (string nesse caso)

console.log(primeiroNúmero + segundoNúmero);//510 (juntou a string 5 e o número 10)

console.log(typeof(primeiroNúmero + segundoNúmero));// pega o tipo do primeiro e considera igual o segundo
// nesse caso, todos passaram a ser string
