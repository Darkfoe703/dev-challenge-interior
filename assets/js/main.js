
const burgerBtn = document.getElementsByClassName('burger-btn');
burgerBtn[0].addEventListener("click", menuNav);

const brandLogo = document.getElementsByClassName('brand');
const navBar = document.getElementsByClassName('nav');

const closeBtn = document.createElement('div');
closeBtn.classList.add('close-btn', 'none');
closeBtn.innerHTML = '✖';
navBar[0].appendChild(closeBtn);

closeBtn.addEventListener("click", closeNav);

function menuNav() {
  navBar[0].classList.toggle('nav-s');
  closeBtn.classList.toggle('none');
}

function closeNav() {
  navBar[0].classList.toggle('nav-s');
  closeBtn.classList.toggle('none');
}
