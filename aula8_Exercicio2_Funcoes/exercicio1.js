// FUNÇÃO QUE ESCREVE MEU NOME, USAR O VERBO
function escrevaSeuNome(nome) {
    console.log(`Meu nome é: ${nome}`);
}
escrevaSeuNome('Marcos Antonio Silva de Souza');
escrevaSeuNome('Gisele Silva dos Santos de Souza');

console.log('----------------------------------------------');

//FUNÇÃO QUE VEJA SE EU SOU MAIOR DE IDADE
function verificarMaioridade(idade) {    
    if (idade >= 18) {
        console.log(`Voce tem ${idade} anos, Você é maior de idade!`);
    } else {
        console.log(`Voce tem ${idade} anos, Você é menor de idade!`);
    }
}
verificarMaioridade(17);

