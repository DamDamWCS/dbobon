function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const header = document.querySelector('header');
    
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
      header.classList.toggle('show-nav');
    });    
    // const navbarLinks = document.querySelectorAll('.navbar a');
    // navbarLinks.forEach(link => {
    //   link.addEventListener('click', (e) => {    
    //     navbar.classList.toggle('show-nav');
    //   }); 
    // })
     
  }
  toggleMenu();