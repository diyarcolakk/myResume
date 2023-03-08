const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overflowShow = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  overflowShow.classList.toggle("isOverflowHidden");
});

document.querySelectorAll(".navlink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
