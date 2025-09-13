/* Faça um Programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:

1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de combustível que está no seu carro;
2 - Gasto médio de combustível do carro por Km;
3 - Distância em Km da viagem;

*/

const pricePerLiterEthanol = 5.79;
const pricePerLiterGasoline = 6.66; // nesse caso, o preço não vai mudar
const KilometerperLiter= 10; 
const distanceInKilometers = 100;

const fuelType = '';

const litersConsumed = distanceInKilometers / KilometerperLiter;
 

if(fuelType === 'Etanol') {
    const amountSpent  = litersConsumed * pricePerLiterEthanol;//valor Gasto
    console.log(`${'O valor da minha viagem ficou em R$'}${amountSpent.toFixed(2)}`);     

} else {
    const amountSpent  = litersConsumed * pricePerLiterGasoline;//valor Gasto
    console.log(`${'O valor da minha viagem ficou em R$'}${amountSpent.toFixed(2)}`);    
}

