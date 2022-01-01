const navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;

function stickMenu() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function() {
  stickMenu()
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300
});