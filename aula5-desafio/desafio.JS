/* Faça um Programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:

1- Preço do combustível;
2 - Gasto médio de combustível do carro por Km;
3 - Distância em Km da viagem;

*/

const precoCombustivelPorLitro = 5.79; // nesse caso, o preço não vai mudar
let KilometroPorLitro = 12;
let distanciaEmKilometro = 1580;

let custoPorKilometro = precoCombustivelPorLitro / KilometroPorLitro;
let custoTotal = distanciaEmKilometro * custoPorKilometro;

let ValorGasto = custoTotal.toFixed(2);

console.log(`${'O valor da minha viagem ficou em R$'}${ValorGasto}`);
 