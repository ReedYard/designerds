// _header.scss

// navbar menu opening

const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", initToggle);

function initToggle() {
  const nav = document.getElementById("navbar-nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
    nav.style.marginTop = "2rem";
  } else {
    nav.removeAttribute("style");
  }
}

// navbar set height

window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("main-nav");
let nav_backdrop = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > nav_backdrop) {
    navbar.classList.add("nav-backdrop");
  } else {
    navbar.classList.remove("nav-backdrop");
  }
}

// close window on click

let navtoclose = document.getElementById("navbar-nav");

let navlink = document.getElementsByClassName("nav-link");

for (var i = 0, len = navlink.length, elm; i < len; i++) {
  elm = navlink[i];

  elm.addEventListener("click", navClose);
}

function navClose() {
  if (navtoclose.classList.contains("open")) {
    navtoclose.removeAttribute("style");
    navtoclose.classList.remove("open");
  }
}
