/*
1 - Crie uma classe para representar carros.
Os Carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço de combustível nos dê o valor
gasto em reais pra realizar este percurso.
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    //NÃO É OBRIGATÓRIO SEMPRE USAR CONSTRUTOR
    //SOMENTE QUANDO TENHO QUE PASSAR ÍTENS OBRIGATÓRIOS
    //LEMBRANDO QUE THIS ESTOU REFERENCIANDO AO ATRIBUTO DO OBJ
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    //Vou receber a Distância e o Preço de fora
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
        
    }
}

//Aqui estou supondo que o carro faça 12km com 1L
const gol = new Carro('Gol', 'Vermelho', 1 / 12);
const citroen = new Carro('Citroen', 'Preto', 1/10);
 
console.log(gol.calcularGastoDePercurso(70,5));
console.log(citroen.calcularGastoDePercurso(70,5))
 


