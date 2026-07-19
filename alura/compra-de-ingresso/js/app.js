function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdIngresso = parseInt(document.getElementById('qtd').value); //O input devolve string, por isso transforma em INTEIRO e pega somente o valor(.value)
    
    if (tipoIngresso.value == 'pista') {
        comprarPista(qtdIngresso)
    } else if (tipoIngresso.value == 'superior') {
        comprarIngressoSuperior(qtdIngresso)
    } else{
        comprarIngressoInferior(qtdIngresso)
    }
}

function comprarPista(qtdIngresso) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); 
    //O span devolve string, por isso transforma em INTEIRO, e aqui ele não possui valor e sim conteúdo(.textContent)

    if (qtdIngresso > qtdPista) {
        alert('Quantidade indisponível de ingresso tipo Pista!')
    } else {
        qtdPista = qtdPista - qtdIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarIngressoSuperior(qtdIngresso) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent); 
    //O span devolve string, por isso transforma em INTEIRO, e aqui ele não possui valor e sim conteúdo(.textContent)

    if (qtdIngresso > qtdSuperior) {
        alert('Quantidade indisponível de ingresso tipo Cadeira Superior!')
    } else {
        qtdSuperior = qtdSuperior - qtdIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarIngressoInferior(qtdIngresso) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent); 
    //O span devolve string, por isso transforma em INTEIRO, e aqui ele não possui valor e sim conteúdo(.textContent)

    if (qtdIngresso > qtdInferior) {
        alert('Quantidade indisponível de ingresso tipo Cadeira Inferior!')
    } else {
        qtdInferior = qtdSuperior - qtdIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}