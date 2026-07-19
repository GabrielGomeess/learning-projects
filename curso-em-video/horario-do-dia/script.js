function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();

  //var hora = 16

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA!

    img.src = "assets/fotomanha.jpg";
    document.body.style.background = "#FECB89";

  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!

    img.src = "assets/fototarde.jpg";
    document.body.style.background = "#864317";

  } else {
    //BOA NOITE!

    img.src = "assets/fotonoite.jpg";
    document.body.style.background = "#121C23";
    
  }
}
