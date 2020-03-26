const header = document.querySelector('#header');
const navbar = header.querySelector('#navbar');

document.onscroll = function() {
  if (window.pageYOffset > header.offsetHeight) navbar.classList.add('fixed');
  else navbar.classList.remove('fixed');
};

function toggleNav() {
  navbar.classList.toggle('full');
}

window.onresize = function() {
  if (header.offsetWidth > 576) navbar.classList.remove('full');
};
