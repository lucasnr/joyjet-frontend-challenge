const header = document.querySelector('#header');
const navbar = header.querySelector('#navbar');

document.onscroll = function() {
  if (window.pageYOffset > header.offsetHeight) navbar.classList.add('fixed');
  else navbar.classList.remove('fixed');
};
