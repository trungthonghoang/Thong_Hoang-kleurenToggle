const menu = document.querySelector(".menu");
const hamButton = document.querySelector(".burgerButton");
const body = document.getElementById("body");

//hamburger dropdown-menu
hamButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("showMenu");
};

//voor home
const makeHome = document.querySelector(".make-home");

makeHome.addEventListener("click", veranderAchtergrondHome);

function veranderAchtergrondHome(){
  body.classList.add("home");
  body.classList.remove("red");
  body.classList.remove("orange");
  body.classList.remove("purple");
  body.classList.remove("green");
  toggleMenu();
};

//voor rood
const makeRed = document.querySelector(".make-red");

makeRed.addEventListener("click", veranderAchtergrondRood);

function veranderAchtergrondRood(){
  body.classList.add("red");
  body.classList.remove("orange");
  body.classList.remove("purple");
  body.classList.remove("green");
  toggleMenu();
};

//voor oranje
const makeOrange = document.querySelector(".make-orange");

makeOrange.addEventListener("click", veranderAchtergrondOranje);

function veranderAchtergrondOranje(){
  body.classList.add("orange");
  body.classList.remove("red");
  body.classList.remove("purple");
  body.classList.remove("green");
  toggleMenu();
};

//voor paars
const makePurple = document.querySelector(".make-purple");

makePurple.addEventListener("click", veranderAchtergrondPaars);

function veranderAchtergrondPaars(){
  body.classList.add("purple");
  body.classList.remove("red");
  body.classList.remove("orange");
  body.classList.remove("green");
  toggleMenu();
};

//voor groen
const makeGreen = document.querySelector(".make-green");

makeGreen.addEventListener("click", veranderAchtergrondGroen);

function veranderAchtergrondGroen(){
  body.classList.add("green");
  body.classList.remove("red");
  body.classList.remove("orange");
  body.classList.remove("purple");
  toggleMenu();
};