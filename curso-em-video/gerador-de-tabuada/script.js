function gerarTabuada() {
  //Primeiro fazer a atribuição do elemento à uma variável
  let num = document.getElementById("txtn");
  let tab = document.getElementById("seltab");

  //Segundo fazer a conversão do valor da variavel criada

  //Terceiro criar uma repetição que faça enquanto a condição for verdadeira
  if (num.value.length == 0) {
    //Aqui o alerta será emitido caso não tenha um número digitado
    window.alert("[ERRO] Digite um número");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";

    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
