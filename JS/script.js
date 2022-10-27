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
//const nameForm = document.querySelector("#nameForm").value

document.querySelector(".contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameForm = document.querySelector("#nameForm").value
  const formOk = `Merci ${nameForm} de votre message, il sera traité prochainement.`;
  document.querySelector(".contactForm").reset();
  console.log(nameForm);
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
document.querySelectorAll(".anchorLink").forEach((anchorLink) => {
  anchorLink.addEventListener("click", function (e) {
    const hash = e.currentTarget.hash; // Récupère la valeur du href du lien
    const nameHash = document.querySelector(hash); // selection de l'élement du lien de l'ancre
    e.preventDefault();
    //console.log(anchorLinks);
    console.log(hash);
    console.log(nameHash.offsetTop); // J'affiche la position top de l'élement cible de mon lien
    window.scrollTo({
      //Positionnement de la fenêtre
      top: nameHash.offsetTop - 85, //Je défini la postion top à la quel me rendre - la hauteur de mon header (85px)
      behavior: "smooth", // J'ajoute un effet doux à la navigation
    });
  });
});

//POPUP
const popup = document.querySelector(".popup"); //selection de la div popup
const popupContent = document.querySelector(".popupContent"); // selction d de l'image dans le popup
document.querySelectorAll(".imgAchivement").forEach((img) => { //boucle sur les images pour afficher la popup en fonction de l'image cliqué
  img.addEventListener("click", function () {
    //console.log(popup);
    popup.style.display = "block"; //Permet de passer de display none à block pour afficher la popup
    popupContent.src = this.src;// On change la source de l'image en fonction l'image selectionné au clique.
  });
});
const span = document.querySelector(".close");//selection du bouton fermer

span.addEventListener("click", function () {
  popup.style.display = "none"; //on dé-affiche la popup au clique du bouton fermer
});
