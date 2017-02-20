var header = document.getElementById("header");

window.onscroll = function () {
  if (document.body.scrollTop > 64) {
    header.classList.add("header--after-scroll");
  } 
  else {
    header.classList.remove("header--after-scroll");    
  }
}

var hamburger = document.getElementById("hamburger")
var mobileNav = document.getElementById("mobile-nav")

hamburger.onclick = function () {
  if (document.querySelector(".mobile-nav--is-open") !== null) {
    mobileNav.classList.remove("mobile-nav--is-open");
    hamburger.classList.remove("hamburger--is-open");
  } else {
    mobileNav.classList.add("mobile-nav--is-open");
    hamburger.classList.add("hamburger--is-open");
  }
}