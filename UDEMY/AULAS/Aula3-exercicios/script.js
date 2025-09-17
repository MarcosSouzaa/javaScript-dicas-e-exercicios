const nome =    prompt('Digite o seu nome completo: ;');

document.body.innerHTML += `Seu nome é <strong>${nome}</strong>; <br/>`;
document.body.innerHTML += `Seu nome contando com os espaços entre as palavras tem <strong>${nome.length}</strong> letras;<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong>;<br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra O do seu nome? O índice é <strong>${nome.indexOf('o')}</strong>; <br/>`;
document.body.innerHTML += `Qual o último índice da letra o no seu nome? O indíce é <strong>${nome.lastIndexOf('o')}</strong>; <br/> `;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong>; <br/> `;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>; <br/> `;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong>; <br/>`;
document.body.innerHTML += `Seu nome com letra minúsculas: <strong>${nome.toLowerCase()}</strong>.`;