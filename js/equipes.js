const equipes = document.querySelectorAll("section");

const botao = document.querySelectorAll(".botao");

for(let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function (event){
    event.preventDefault();
    for(let i = 0; i < botao.length; i++) {
      equipes[i].classList.add("hide");
    }
    equipes[i].classList.remove("hide");
  });
}