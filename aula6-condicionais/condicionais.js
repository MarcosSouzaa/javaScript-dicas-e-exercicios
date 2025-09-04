/*OPERADORES BOLEANOS *

% RESTO DA DIVISÃO
= ATRIBUIÇÃO
== IGUALDADE
=== IGUALDADE E TIPO (SEMPRE USA ESSE PARA COMPARAÇÃO)
! NEGAÇÃO
if 
else if 
else
true 1
false 0

*/

/*
const numero = 53;

//verifico se o número é divisísel por 2 e sobra 0

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if(numeroPar){

    console.log("É Par");
}else {

    console.log("É impar");
}

*/
/* OUTRA FORMA MAIS LONGA COM NÚMERO PAR

const numero = 53;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if(numeroPar){

    console.log("É Par");
}

//Usando negação
if(!numeroPar) {

    console.log("É Impar");
}
    
*/

// SE UM NÚMERO É DIVISÍVEL POR 5

/*
const numero = 18;

const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){

    console.log("O número é inválido");

}else if (numeroDivisivelPor5){ 

console.log('SIM');

}else{

    console.log("NÃO");
}

 */

//MELHORANDO O CÓDIGO

const number = 10046;
const isnumberEven = (number % 2) === 0;

if(isnumberEven) {
    console.log('O número é Par')
}else{
    console.log('O número é impar')
}

