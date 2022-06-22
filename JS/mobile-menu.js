const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main_header div ul');

hamburger.addEventListener('click', function openMenu() {
  this.classList.toggle('is-active');
  menu.classList.toggle('show');
});

menu.addEventListener('click', function closeMenu() {
  this.classList.toggle('show');
  hamburger.classList.toggle('is-active');
});