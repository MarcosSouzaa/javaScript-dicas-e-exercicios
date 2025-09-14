/* 
CONSTRUTOR
------------
Vamos pensar que o nome e aidade são obrigatórios, nesse caso eu utilizo 
o método constructor e passo os atributos do objeto com this.
*/
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //AQUI POSSO PEDIR PARÂMETROS PARA OBRIGAR A TODA VEZ QUE ESTANCIAR
    //O OBJETO EU PASSAR ESSES PARÂMETROS
    constructor(nome, idade) {
        //Este nome que é o objeto, recebe o nome que eu passar
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}
//Ao instânciar a classe, passo nome e a idade
const Marcos = new Pessoa('Alice', 14);//Meu nome é Alice e minha idade é 14 anos.
const Gisele = new Pessoa('Letícia', 8);//Meu nome é Letícia e minha idade é 7 anos.

Marcos.descrever();
Gisele.descrever();

//Aqui, estou chamando o OBJETO pessoa atravé da classe estanciada e houve
//um acrescimo do atributo anoDeNascimento nos atributos da Classe e no Construtor
//mas não passei ele quando instanciei, mas mesmo assim ele veio.

console.log(Marcos);
//Pessoa { nome: 'Alice', idade: 14, anoDeNascimento: 2011 }



