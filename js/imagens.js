const imagens = document.querySelectorAll(".small-img");
const modal = document.querySelector(".modal");
const modalimg = document.querySelector(".modal-img");
const close = document.querySelector(".close");

for (let i = 0; i < imagens.length; i++) {
  let srcVal = "";
  imagens[i].addEventListener("click", () => {
    srcVal = imagens[i].getAttribute("src");
    modalimg.setAttribute("src", srcVal);
    modal.classList.add("modal-active");
  });
}

function fecharModal(event) {
  event.preventDefault();
  modal.classList.remove("modal-active");
}

close.addEventListener("click", fecharModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") fecharModal(event);
});

modal.addEventListener("click", (event) => {
  if (event.target === this) fecharModal(event);
});
