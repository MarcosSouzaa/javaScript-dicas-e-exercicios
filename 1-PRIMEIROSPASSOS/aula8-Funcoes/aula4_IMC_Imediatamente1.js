//FUNÇÕES INVOCADAS IMEDIATAMENTE1
/*
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
        return (`Seu IMC é ${imc.toFixed(2)} kg, voce está Abaixo do peso.`);
    } else if (imc >= 1.5 && imc < 25) {
        return (`Seu IMC é ${imc.toFixed(2)} kg, voce está com peso normal.`);
    } else if (imc >= 25 && imc < 30) {
        return (`Seu IMC é ${imc.toFixed(2)} kg, voce está acima do peso.`);
    } else if (imc >= 30 && imc < 40) {
        return (`Seu IMC é ${imc.toFixed(2)} kg, voce está Obeso.`);
    } else {
        return (`Seu IMC é ${imc.toFixed(2)} kg, voce está com Obsidade Grave.`);
    }
}

//USANDO A FUNÇÃO MAIN PARA ISOLAR O CÓDIGO
function main() {
    const peso = 87;
    const altura = 1.87;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();
//Consigo imprimir uma função como um objeto
// aqui retorna: [Function: main]
// console.log(main);

//const main2 = main;
//Também recebo [Function: main]
//console.log(main2);

//consigo invocar o main2
//Ele devolverá no Console o que em main
//Seu IMC é 24.88 kg, voce está com peso normal.
//main2();

/* Depois que declaramos uma função, o que está dentro dela
se tornam valores. Podemos passar esses valores para outras variáveis,
conseguimos passar uma função como parâmetro de outra função.
posso manipular as funções como se fosse um número ou texto. Ex:

main = function() {
    console.log(1);    
}
retorna 1 no console
main();

*/