const ham = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const sections = document.querySelectorAll('section');
const menuContainer = document.querySelector('.menu-container');
const mobileLinKItem = document.querySelectorAll('.mobile-link-item');

function sectionFunc() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.remove('blur');
  }

  menuContainer.style.display = 'block';
}

function sectionHide() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.remove('blur');
  }

  menuContainer.style.display = 'none';
}
ham.addEventListener('click', sectionFunc);

closeMenu.addEventListener('click', sectionHide);

for (let i = 0; i < mobileLinKItem.length; i += 1) {
  mobileLinKItem[i].addEventListener('click', sectionHide);
}
