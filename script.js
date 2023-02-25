//! ==============Header & Hamburger Section Start================= !//
let hamburger1 = document.querySelector(".hamburger-1");
let hamburger2 = document.querySelector(".hamburger-2");
let nav = document.querySelector("header nav");

hamburger1.addEventListener("click", show);
hamburger2.addEventListener("click", hide);

function show() {
  nav.style.display = "block";
  nav.style.bottom = "-60vh";
  nav.style.bottom = "30vh";
  hamburger1.style.display = "none";
  hamburger2.style.display = "block";
  hamburger2.style.fontSize = "2rem";
}

function hide() {
  nav.style.bottom = "50vh";
  nav.style.bottom = "-60vh";
  hamburger1.style.display = "block";
  hamburger2.style.display = "none";
}
//! ==============Header & Hamurger Section Start================= !//
