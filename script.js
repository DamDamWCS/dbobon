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
  // if(document.querySelector("#name").value ==""){
  //   event.preventDefault();
  //   alert("veuiller renseigner votre nom")
  // }else{

  // }
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
    const hash = e.currentTarget.hash;
    if (hash) {
      e.preventDefault();
      console.log(hash);
      var nameHash = document.querySelector(hash);
      console.log(nameHash.offsetTop);
      window.scrollTo({
        top: nameHash.offsetTop - 85,
        behavior: "smooth",
      });
    }
  });
});
