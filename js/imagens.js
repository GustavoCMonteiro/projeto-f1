let imagens = document.querySelectorAll(".small-img");
let modal = document.querySelector(".modal");
let modalimg = document.querySelector(".modal-img");
let close = document.querySelector(".close");
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("click", function () {
    srcVal = imagens[i].getAttribute("src");
    modalimg.setAttribute("src", srcVal);
    modal.classList.add("modal-active");
  });
}

close.addEventListener("click", function () {
  modal.classList.remove("modal-active");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.remove("modal-active");
  }
});
