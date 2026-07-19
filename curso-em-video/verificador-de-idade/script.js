function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!!!");
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";

      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "assets/bebe-m.jpg");
      } else if (idade < 25) {
        //JOVEM
        img.setAttribute("src", "assets/jovem-m.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "assets/adulto-m.jpg");
      } else {
        //IDOSO
        img.setAttribute("src", "assets/idoso-m.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";

      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "assets/bebe-f.jpg");
      } else if (idade < 25) {
        //JOVEM
        img.setAttribute("src", "assets/jovem-f.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "assets/adulto-f.jpg");
      } else {
        //IDOSO
        img.setAttribute("src", "assets/idoso-f.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
