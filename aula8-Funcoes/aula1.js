// FUNÇÃO SEM PARÂMETRO E SEM RETORNO
function teste() {
    console.log('Testando');
}
//Invocando a função
teste();
teste();

console.log('---------------------------------------------------------');

//FUNÇÃO COM PARÂMETRO SEM RETORNO
function sayMyName(name) {
    console.log(`You're name is ${name}`);
}
sayMyName('Marcos');
sayMyName('Gisele');

console.log('----------------------------------------------------------');

//FUNÇÃO COM PARÂMETRO E RETORNO
function quadrado(valor) {
    return valor * valor;
}
const quadradoDoNumero = quadrado(10);
console.log(`O quadrado do número passado é ${quadradoDoNumero}.`);

console.log('-----------------------------------------------------------');

// FUNÇÃO COM DOIS PARÂMETROS - INCREMENTO DE JUROS
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (valor * percentualJuros) / valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));
