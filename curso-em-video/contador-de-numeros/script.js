//criar a função

function contar() {
  //Relacionar o elemento do HTML à uma variavel criada
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  //verificação se há numeros digitados
  if (
    inicio.value.length == 0 ||
    fim.value.legth == 0 ||
    passo.value.length == 0
  ) {
    //alerta gerado se não houver digitação
    window.alert("[ERRO] DADOS NÃO INFORMADOS");
  } else {
    res.innerHTML = "Contando: <br>";

    //Converter o valor recibido na variavel anteriormente criada
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    //Verificação se o passo digitado for inválido
    if (p <= 0) {
      window.alert("[ERRO] Passo Inválido. Considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      //Contagem Crescente
      for (let c = i; c <= f; c += p) res.innerHTML += `${c} \u{1F449}`;
    } else {
      //Contagem Decrescente
      for (let c = i; c >= f; c -= p) res.innerHTML += `${c} \u{1F449}`;
    }

    res.innerHTML += `\u{1F3C1}`;
  }
}
