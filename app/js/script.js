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

// navbar sticky after scrolling

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("main-nav");
var nav_backdrop = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > nav_backdrop) {
    navbar.classList.add("nav-backdrop");
  } else {
    navbar.classList.remove("nav-backdrop");
  }
}
