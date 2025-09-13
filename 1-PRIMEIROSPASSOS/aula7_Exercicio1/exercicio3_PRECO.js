/**
 * Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal 
 * de etiqueta e a escolha da condição de pagamento adequado.
 * Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o
 * código adequado.
 * 
 * Código Condição de Pagamento
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
 */

const produto = 100;

const pgtDebitoAvista = produto - (produto * 0.10);
const pgtDinheiroPixAvista = produto - (produto * 0.15);
const pgtDuasParcelas = produto;
const pgtAcimaDuasParcelas = produto + (produto * 0.10);

let formadePagamento = 3;

if (formadePagamento === 1) {
    console.log(`O produto custou R$${produto},00. Pgt com 10% de desconto ficou em R$${pgtDebitoAvista.toFixed(2)}`);

} else if (formadePagamento === 2) {
    console.log(`O produto custou R$${produto},00. Pgt com 15% de desconto ficou em R$${pgtDinheiroPixAvista.toFixed(2)}`);

} else if (formadePagamento === 3) {
    console.log(`O produto custou R$${produto},00. Pgt em 2X sem juros, ficou em R$${pgtDuasParcelas.toFixed(2)}`);

} else {
    console.log(`O produto custou R$${produto},00. Pgt acima de 2X, 10% com juros ficou em R$${pgtAcimaDuasParcelas.toFixed(2)}`);
}