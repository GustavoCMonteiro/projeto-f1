const equipes = document.querySelectorAll("section");

const botao = document.querySelectorAll(".botao");

equipes[0].classList.add("show");

for(let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function (event){
    event.preventDefault();
    for(let i = 0; i < botao.length; i++) {
      equipes[i].classList.remove("show");
    }
    equipes[i].classList.add("show");
  });
}