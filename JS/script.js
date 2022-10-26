// BURGER MENU
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  const header = document.querySelector("header");

  burger.addEventListener("click", function () {
    navbar.classList.toggle("showNav");
    header.classList.toggle("showNav");
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

//NAVIGATION DES LIENS D'ANCRES
//const anchorLinks = document.querySelectorAll(".anchorLink");
//anchorLinks.forEach((anchorLink) => {
document.querySelectorAll(".anchorLink").forEach(anchorLink => {
  anchorLink.addEventListener("click", function (e) {
    const hash = e.currentTarget.hash; // Récupère la valeur du href du lien
    const nameHash = document.querySelector(hash); // selection de l'élement du lien de l'ancre
    e.preventDefault();
    //console.log(anchorLinks);
    console.log(hash);
    console.log(nameHash.offsetTop); // J'affiche la position top de l'élement cible de mon lien
    window.scrollTo({//Positionnement de la fenêtre
      top: nameHash.offsetTop - 85, //Je défini la postion top à la quel me rendre - la hauteur de mon header (85px)
      behavior: "smooth", // J'ajoute un effet doux à la navigation
    });
  });
});


//ANIMATION DES SECTION

// First we select the element we want to target
// const target = document.querySelector(".animated");
// function handleIntersection(entries) {
  // The callback will return an array of entries, even if you are only observing a single item
//   entries.map((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible')
//     } else {
//       entry.target.classList.remove('visible')
//     }
//   });
// }
// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
//const observer = new IntersectionObserver(handleIntersection);

// Finally start observing the target element
//observer.observe(target);