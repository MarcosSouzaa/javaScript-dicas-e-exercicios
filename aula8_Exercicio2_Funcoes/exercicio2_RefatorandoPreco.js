/* REFATORANDO O EXERCÍCIO COM FUNÇÕ ES

 * Código Condição de Pagamento
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
*/
/*

PRIMEIRA FORMA

const precoEtiqueta = 100;

const pgtDebitoAvista = precoEtiqueta - (precoEtiqueta * 0.10);
const pgtDinheiroPixAvista = precoEtiqueta - (precoEtiqueta * 0.15);
const pgtDuasParcelas = precoEtiqueta;
const pgtAcimaDuasParcelas = precoEtiqueta + (precoEtiqueta * 0.10); 

function calcularPreco(precoEtiqueta, formadePagamento) {

    if (formadePagamento === 1) {
     console.log(`O precoEtiqueta custou R$${precoEtiqueta},00. Pgt com 10% de desconto ficou em R$${pgtDebitoAvista.toFixed(2)}`);

    } else if (formadePagamento === 2) {
     console.log(`O precoEtiqueta custou R$${precoEtiqueta},00. Pgt com 15% de desconto ficou em R$${pgtDinheiroPixAvista.toFixed(2)}`);

    } else if (formadePagamento === 3) {
     console.log(`O precoEtiqueta custou R$${precoEtiqueta},00. Pgt em 2X sem juros, ficou em R$${pgtDuasParcelas.toFixed(2)}`);

    } else {
     console.log(`O precoEtiqueta custou R$${precoEtiqueta},00. Pgt acima de 2X, com 10% juros ficou em R$${pgtAcimaDuasParcelas.toFixed(2)}`);
    }
}
console.log(calcularPreco(100, 4));
*/
console.log('====================================================================');

//SEGUNDA FORMA => 0,05 = 5%, 0,1 = 10%, 0,15 = 15%.

function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros / 100);
}

const precoEtiqueta = 1350;
const formaDePagamento = 3;

const valorJuros = precoEtiqueta * 10 / 100

if (formaDePagamento === 1) {
    console.log(`Valor do produto à vista no Débito R$${precoEtiqueta.toFixed(2)

        }.Pagamento com 10% de desconto ficou em R$${aplicarDesconto(precoEtiqueta, 10).toFixed(2)}.`);

} else if (formaDePagamento === 2) {
    console.log(`Valor do produto à vista no Dinheiro ou Pix R$${precoEtiqueta.toFixed(2)

        }.Pagamento com 15% de desconto ficou em R$${aplicarDesconto(precoEtiqueta, 15).toFixed(2)}.`);

} else if (formaDePagamento === 3) {
    console.log(`Valor do produto R$${precoEtiqueta.toFixed(2)

        }.Pagamento com preço normal sem juros, ficou em R$${aplicarDesconto(precoEtiqueta, 0).toFixed(2)}.`);

} else {
    console.log(`Valor do produto R$${precoEtiqueta.toFixed(2)

        }.Pagamento com juros de 10% ficou em R$${aplicarJuros(precoEtiqueta, 10).toFixed(2)}.`);

}