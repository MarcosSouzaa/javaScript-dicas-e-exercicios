/*
    2) O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
    sobre a condição de peso de uma pessoa adulta.

Fórmula IMC:
IMC = peso / (altura * altura)

Elabora um algorítimo que dado o peso e a altura de um adulto, mostre a sua condição de acordo  com
a tabela abaixo:

IMC em adultos, condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25, peso normal;
- Entre 25 e 30, acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave;

*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return(`Seu IMC é ${imc.toFixed(2)} kg, voce está Abaixo do peso.`);
    } else if (imc >= 1.5 && imc < 25) {
        return(`Seu IMC é ${imc.toFixed(2)} kg, voce está com peso normal.`);
    } else if (imc >= 25 && imc < 30) {
        return(`Seu IMC é ${imc.toFixed(2)} kg, voce está acima do peso.`);
    } else if (imc >= 30 && imc < 40) {
        return(`Seu IMC é ${imc.toFixed(2)} kg, voce está Obeso.`);
    } else {
        return(`Seu IMC é ${imc.toFixed(2)} kg, voce está com Obsidade Grave.`);
    }

}

//USANDO A FUNÇÃO MAIN PARA ISOLAR O CÓDIGO
function main() {
const peso = 92;
const altura = 1.87;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
}
main();



