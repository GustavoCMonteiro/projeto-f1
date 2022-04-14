let imagens = document.querySelectorAll(".small-img");
let modal = document.querySelector(".modal");
let modalimg = document.querySelector(".modal-img");
let close = document.querySelector(".close");
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("click", function () {
    srcVal = imagens[i].getAttribute("src");
    modalimg.setAttribute("src", srcVal);
    modal.classList.toggle("modal-active");
  });
}

close.addEventListener("click", function () {
  modal.classList.toggle("modal-active");
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		modal.classList.toggle("modal-active");
	}
});
