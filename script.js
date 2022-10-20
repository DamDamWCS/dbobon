// BURGER MENU
function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const header = document.querySelector('header');
    
    burger.addEventListener('click',function() {    
      navbar.classList.toggle('show-nav');
      header.classList.toggle('show-nav');
    });    
     
  }
  toggleMenu();

  // FORMULAIRE DE CONTACTE
  const formOk =
  "Merci de votre message, il sera traité prochainement.";

document.querySelector(".contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector(".contactForm").reset();
  alert(formOk);
});
