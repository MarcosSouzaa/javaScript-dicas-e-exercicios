/*
FUNÇÕES RECEBENDO OBJETOS
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

//Vou fazer uma função que compara pessoas
//Agora passo os objetos como parâmetros e cada objeto
//contem uma infinidade de parâmetros
function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}
//PASSANDO PARA O CONSTRUTOR
const alice = new Pessoa('Alice', 15);
const leticia = new Pessoa('Letícia', 15);

//CHAMANDO A FUNÇÃO PASSANDO OS NOMES
compararPessoa(alice, leticia);

 