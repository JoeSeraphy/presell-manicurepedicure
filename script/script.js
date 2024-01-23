const itensPerguntasERespotas = document.querySelectorAll(".ask");

itensPerguntasERespotas.forEach(function (ask) {
  ask.addEventListener("click", function () {
    const itemAtivoAtual = document.querySelector(".ativo");

    if (itemAtivoAtual) {
      itemAtivoAtual.classList.remove("ativo");
    }
    ask.classList.add("ativo");
  });
});
