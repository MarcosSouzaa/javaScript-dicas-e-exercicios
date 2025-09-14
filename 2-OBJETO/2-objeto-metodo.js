/*
No javaScript podemos usar funções no Objeto. Uma função dentro do Objeto é chamada de 
MÉTODO.

THIS - Além de usármos o método, vamos usar o this. Criando uma função que chamamos  de 
método e e como esta função está dentro de um objeto ao usarmos o this, ele assume o Objeto. Ex:
- um objeto chamado pessoa(), eu usaria pessoa.nome, com this eu uso: this.nome.
*/

const pessoa = {
    nome: 'Marcos Antonio Silva de Souza',
    idade: 58,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};


//Posso atribuir novos valores ao objeto.
//pessoa.nome = 'Letícia';
//pessoa.idade = 7;

//POSSO SUBSCREVER A FUNÇÃO
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();//Meu nome é Marcos Antonio Silva de Souza e minha idade é 58