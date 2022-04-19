const animLeft = document.querySelectorAll(".js-scroll-left");
const animRight = document.querySelectorAll(".js-scroll-right");

function scrollDown() {
  const windowHalf = window.innerHeight * 0.7;
  animLeft.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowHalf;
    if (sectionTop < 0) {
      section.classList.add("scroll-left");
    } else {
      section.classList.remove("scroll-left");
    }
  });
  animRight.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowHalf;
    if (sectionTop < 0) {
      section.classList.add("scroll-right");
    } else {
      section.classList.remove("scroll-right");
    }
  });
}

window.addEventListener("scroll", scrollDown);
