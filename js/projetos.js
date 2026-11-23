const projetos = document.querySelectorAll(".projeto");
const posicao = document.querySelector("#posicao");
let atual = 0;

function mostrarProjeto(indice) {
  atual = (indice + projetos.length) % projetos.length;
  projetos.forEach((projeto, numero) => {
    projeto.hidden = numero !== atual;
  });
  posicao.textContent = (atual + 1) + " de " + projetos.length;
  posicao.setAttribute("aria-label", posicao.textContent + ": " + projetos[atual].querySelector("h3").textContent);
}

document.querySelector("#anterior").addEventListener("click", () => mostrarProjeto(atual - 1));
document.querySelector("#proximo").addEventListener("click", () => mostrarProjeto(atual + 1));
mostrarProjeto(0);
document.querySelector("#controles").hidden = false;
