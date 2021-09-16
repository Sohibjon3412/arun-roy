let darkMod = document.querySelector(".mode-btn");
let body = document.querySelector("body");

darkMod.addEventListener("click",function() {
  body.classList.toggle("add-color");
});