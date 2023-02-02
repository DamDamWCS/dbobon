// BURGER MENU
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", function () {
    navbar.classList.toggle("showNav");
  });
}
toggleMenu();

//NAVIGATION DES LIENS D'ANCRES
document.querySelectorAll(".anchorLink").forEach((anchorLink) => {
  anchorLink.addEventListener("click", function (e) {
    const hash = e.currentTarget.hash;
    const nameHash = document.querySelector(hash);
    e.preventDefault();
    console.log(hash);
    console.log(nameHash.offsetTop);
    window.scrollTo({
      top: nameHash.offsetTop - 85,
      behavior: "smooth",
    });
  });
});
