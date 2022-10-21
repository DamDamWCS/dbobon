// BURGER MENU
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  const header = document.querySelector("header");

  burger.addEventListener("click", function () {
    navbar.classList.toggle("show-nav");
    header.classList.toggle("show-nav");
  });
}
toggleMenu();

// FORMULAIRE DE CONTACTE
const formOk = "Merci de votre message, il sera traité prochainement.";

document.querySelector(".contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector(".contactForm").reset();
  alert(formOk);
});

// $(document).ready(function() {
//   $('a[href*="#"]').on('click', (event) => {
//     const hash = event.currentTarget.hash;
//     if (hash) {
//       event.preventDefault();
//       $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 750);
//     }
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const hash = e.currentTarget.hash; // Récupère la valeur du href du lien
    const nameHash = document.querySelector(hash); // selection de l'élement du lien de l'ancre
      e.preventDefault();
      console.log(hash);
      console.log(nameHash.offsetTop); // J'affiche la position top de l'élement cible de mon lien
      window.scrollTo({
        top: nameHash.offsetTop - 85, //Je défini la postion top à la quel me rendre - la hauteur de mon header (85px)
        behavior: "smooth", // J'ajoute un effet doux à la navigation
      });
  });
});
