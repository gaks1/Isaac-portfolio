const ham = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const sections = document.querySelectorAll('section');
const menuContainer = document.querySelector('.menu-container');
const mobileLinKItem = document.querySelectorAll('.mobile-link-item');

ham.addEventListener('click',()=>{
   
   for (let section of sections) {
      section.classList.add('blur');
   }
   
   menuContainer.style.display = 'block';
   alert('works');
});

closeMenu.addEventListener('click', ()=>{
   for (let section of sections) {
      section.classList.remove('blur');
   }

   menuContainer.style.display = 'none';
});

for (var i = 0; i < mobileLinKItem.length; i++) {
   mobileLinKItem[i].addEventListener('click', ()=>{
      for (let section of sections) {
         section.classList.remove('blur');
      }
   
      menuContainer.style.display = 'none';
   });
}
