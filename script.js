const hamburgerMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener('click', ()=>{
  hamburgerMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})