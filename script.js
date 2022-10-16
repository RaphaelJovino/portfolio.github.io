// rotacao do botao
document.getElementById("idBotaoMenu").addEventListener("click", girar);

function girar() {
  if (idBotaoMenu.style.transform == "rotate(0deg)") {
    idBotaoMenu.style.transform = "rotate(180deg)";
  } else {
    idBotaoMenu.style.transform = "rotate(0deg)";
  }
}

// esconder menu

let botaoNavegacao = document.getElementById("idBotaoMenu");
let barraNavegacao = document.getElementById("barraNavegacao");

botaoNavegacao.addEventListener("click", function () {
  if (barraNavegacao.style.display == "none") {
    barraNavegacao.style.display = "block";
  } else {
    barraNavegacao.style.display = "none";
  }
});
