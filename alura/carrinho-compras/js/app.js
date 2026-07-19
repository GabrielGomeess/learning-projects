let totalGeral = 0;
limpar();


function adicionar() {
    //recuperar os valores: nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById("quantidade").value;

    //calcular o preço total do produto (quantidade x valor)
    let preco = quantidade * valorUnitario;

    //adicionar o produto ao carrinho (criar um elemento HTML e adicionar ao carrinho)
    let carrinho = document.getElementById("lista-produtos");

    carrinho.innerHTML = carrinho.innerHTML + `
        <section class="carrinho__produtos__produto">

          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
          
        </section>`

    //atualizar o valor total do carrinho (somar o preço total do produto ao valor total atual)

    totalGeral = totalGeral + preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`;

    document.getElementById("quantidade").value = '';
    
}

function limpar() {

    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById('valor-total').textContent = `R$ 0`;


}