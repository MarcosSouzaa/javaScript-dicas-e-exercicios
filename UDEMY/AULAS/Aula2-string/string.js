//usando a barra invertida como caracter de espaço
let umaString = "Um \"Texto\"";
console.log(umaString);

console.log('\n======== Strings são indexadas========\n');

           //01234567  
umaString = 'UM TEXTO';

console.log(umaString[0]);//U
console.log(umaString[1]);//M
console.log(umaString[2]);//NADA
console.log(umaString[3]);//T
console.log(umaString[8]);//undefined (Não aponto para nenhum lugar da memória)

console.log('\n======== Posso Pegar um ítem dentro da string ========\n');
console.log(umaString.charAt(5));// X

console.log('\n======== Posso saber em qual índice começa uma palavra ========\n'); 
console.log(umaString.indexOf('TEXTO'));// Índice 3

console.log('\n======== Posso passar uma letra e econtrar o índice  ou a partir de um índice ========\n'); 
console.log(umaString.lastIndexOf('O'));// 7 - se aparecer -1(Não encontrou)
console.log(umaString.lastIndexOf('M', 3));

console.log('\n======== Posso concatenar valores ========\n'); 
console.log(umaString.concat(' em', ' um',' livro.'));//função concat
console.log(umaString + ' em um livro');// usando o +
console.log(`${umaString} em um livro.`);//Template String

console.log('\n======== Utilizando Expressões Regulares ========\n'); 

umaString = 'UM Texto'

console.log(umaString.match(/[a-z]/g));//PEGA AS MINÚSCULAS [ 'm', 't', 'e', 'x', 't', 'o' ]
console.log(umaString.match(/[a-z]/));//SEM A FLAG G:
// Acha a primeira minúscula [ 'e', index: 1, input: 'Um texto', groups: undefined ]
console.log(umaString.replace('UM', 'Outro'));// Outro Texto
//Posso usar expressões Regulares
console.log(umaString.replace(/Um/, 'Outra'));
         //  0123456789
umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString.replace(/r/,'#')); //substitui o primeiro r
console.log(umaString.replace(/r/g,'#'));//Com a flag g - O #ato #oeu a #oupa do #ei de #oma
//Pegando o TAMANHO da string
console.log(umaString.length);//35
//quero fatiar exatamente a palavra rato da string
console.log(umaString.slice(1, 6));//rato
//pegar o tamanho -3
console.log(umaString.slice(-3));//ma
console.log(umaString.slice(-5));//roma => o tamanho - 5
console.log(umaString.slice(-5, -1));//tamanho -5 e depois -1
//se eu fosse utilizar subtring para mesma coisa acima
console.log(umaString.substring(umaString.length-5));//roma.1
console.log(umaString.substring(umaString.length-5, umaString.length-1));//roma
//Quero dividir a String em espaços- o resultado sera um array
console.log(umaString.split(' '));//[ 'O',  'rato',  'roeu',  'a',  'roupa', 'do',  'rei',   'de',  'roma.']

//Se eu quiser dividir nos 'r', observe que ele não será incluido
console.log(umaString.split('r'));//[ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma.' ]

//Posso colocar um limite.Quero que aconteça, mas só duas vezes
console.log(umaString.split(' ', 2));//[ 'O', 'rato' ]
console.log(umaString.split(' ', 3));//[ 'O', 'rato', 'roeu' ]

console.log('\n======== Colocando a string em MAIÚSCULA ========\n'); 
console.log(umaString.toUpperCase());//O RATO ROEU A ROUPA DO REI DE ROMA.

console.log('\n======== Colocando a string em minúscula ========\n'); 
console.log(umaString.toLowerCase());//o rato roeu a roupa do rei de roma.











