/*
CLASSES
--------
Tem como finalidade, definir como são os Objetos para que ele possa ser estanciados e 
reutilizados, ex.: Uma Pessoa tem nome, idade, sexo, altura etc. Ao estanciar a classe
Pessoa, eu posso criar vários indivíduos que têm esse atributo.Então Classe é a Definição 
de uma Pessoa e Estância é a Ocorrência que indica que posso criar Pessoas de etinias,
cores, nomes, idade etc. diferentes.
Uma classe pode ter métodos (function) que utilizam esses atributos. Não é preciso
escrever a palavra reservada function nesse escopo.
*/
//CRIAÇÃO DA CLASSE
class Pessoa {
    nome;
    idade;
    
    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);        
    }
}
//ESTANCIANDO A CLASSE PARA UTILIZAR UMA NOVA PESSOA
const Marcos = new Pessoa();
Marcos.nome = 'Marcos Souza';
Marcos.idade = 58;

const Gisele = new Pessoa();
Gisele.nome = 'Gisele Santos de Souza';
Gisele.idade = 50;

//AQUI IMPRIMO O OBJETO CRIADO
console.log(Marcos);
console.log(Gisele);

//POSSO FAZER A CHAMADA PELO MÉTODO DIRETAMENTE
//DESSA FORMA, VOU RECEBER AS INSTÂNCIAS COM OS ATRIBUTOS DA CLASSE

Marcos.descrever();//Meu nome é Marcos Souza e minha idade é 58 anos.
Gisele.descrever();//Meu nome é Gisele Santos de Souza e minha idade é 50 anos.


