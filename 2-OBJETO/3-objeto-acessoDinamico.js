//ACESSO DINAMICAMENTE VALORES DE UM OBJETO

const pessoa = {
    nome: 'Gisele',
    idade: 50,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
 
const atributo = 'idade';

//acessando idade dinamicamente
console.log(pessoa['idade']);//Meu nome é Gisele e minha idade é 50

console.log(pessoa['nome']);



