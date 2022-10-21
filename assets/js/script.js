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
let paginaPrincipal = document.getElementById("principal");

botaoNavegacao.addEventListener("click", function () {
  if (barraNavegacao.style.visibility == "hidden") {
    barraNavegacao.style.visibility = "visible";
    // paginaPrincipal.style.filter = "blur(3px)";
  } else {
    barraNavegacao.style.visibility = "hidden";
    // paginaPrincipal.style.filter = "none";
  }
});

// aumentaCard

let card = document.getElementById("cardImc");
document.getElementById("cardImc").addEventListener("click", aumentaCard);

function aumentaCard() {
  card.style.display = "none";
}
