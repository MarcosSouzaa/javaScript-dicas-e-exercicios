let num1 = 1; //number
let num2 = 2.5 //number

//Soma de dois números
console.log(num1 + num2); //3.5

//se eu quiser transformar em um número Binário com ToString
num1 = 1066559988;
console.log(num1.toString(2));//.

//somando uma string com um número
console.log(num1.toString() + num2);//12.5

//Observe que o tipo da variável continua number
console.log(typeof (num1));//number

//Se eu quiser alterar o tipo para string
num1 = num1.toString();
console.log(typeof (num1));//string

// atribuindo novamente um número à variável
num1 = 10.164678775;
console.log(typeof (num1));

//diminuindo as casas decimais
console.log(num1.toFixed(2));//10.16

//Quero saber se o número é inteiro
console.log(Number.isInteger(num1));//false é ponto flutuante 10.16

//Recebendo NaN-Not a Number (Não é um Número) Porque não aconteceu a operação
let temp = num1 * 'olá';
console.log(temp); //NaN

//Se eu quiser saber se é um NaN
console.log(Number.isNaN(temp));//true

// IEEE 784 - 2008
let num3 = 0.7; //number
let num4 = 0.1 //number

//Aqui há uma IMPRECISÃO, pois o correto seria 0,8
console.log(num3 + num4);//0.7999999999999999

// Vou tentar de outra forma e vou reeber o mesmo
num3 += num4; // num3 = num3 + num4
console.log(num3); //0.7999999999999999
num3 += num4;
console.log(num3); //0.8999999999999999
num3 += num4;
console.log(num3); //0.9999999999999999

//Observei que a inconsistência continuou
//Vou tentar resolver com toFixed()
num3 = num3.toFixed(2);
//Parece que resolveu, mas ao verificar veremos que não
//esse não é um número inteiro, no caso 1.
//Estou aqui verificando o 0.9999999999999999
console.log(num3);//1.00

//continua um número flutuante
//toFixed transformou em uma string
console.log(Number.isInteger(num3)); false

//transformando a string em número
num3 = Number(num3);

//Se eu fizer dessa forma aqui, resolve meu problema
num3 = parseFloat(num3.toFixed(2));
console.log(num3);//1
console.log(Number.isInteger(num3));//true

num3 += num4;
console.log(num3.toFixed(1)); //1.1
num3 += num4;
console.log(num3.toFixed(1)); //1.2
num3 += num4;
console.log(num3.toFixed(1));//1.3 
num3 += num4;
console.log(num3.toFixed(1));//1.4
num3 += num4;
console.log(num3.toFixed(1));//1.5
num3 += num4;
console.log(num3.toFixed(1));//1.6  
num3 += num4;
console.log(num3.toFixed(1));//1.7  
num3 += num4;
console.log(num3.toFixed(1));//1.8
num3 += num4;
console.log(num3.toFixed(1));//1.9
num3 += num4;
console.log(num3.toFixed(1));//2.0
num3 += num4;
console.log(num3.toFixed(1));//2.1

//A outra forma de resolver esse problema é usar contas:
let num5 = 0.7; //number
let num6 = 0.1 //number

console.log(num5 + num6);

num5 = ((num5 * 100) + (num6 * 100)) / 100;
console.log(num5);//0.8


















