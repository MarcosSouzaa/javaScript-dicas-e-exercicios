/*
O objeto é uma coleção de valores ou um cara que agrupa valores e ele funciona
com chave/valor e ele funciona com agrupamento de dados.
*/
//SINTAXE DO OBJETO LITERAL
const marcos = {
    nome: 'Marcos Antonio Silva de Souza',
    idade: 58
};

console.log(marcos.nome);// Marcos Antonio Silva de Souza
console.log(marcos.idade);// 58
console.log(marcos);// { nome: 'Marcos Antonio Silva de Souza', idade: 58 }

//AQUI ESTOU DELETANDO O INCREMENTO ABAIXO
delete marcos.nome;

//INCREMENTO
marcos.altura = 1.87;
console.log(marcos);//{ nome: 'Marcos Antonio Silva de Souza', idade: 58, altura: 1.87}

