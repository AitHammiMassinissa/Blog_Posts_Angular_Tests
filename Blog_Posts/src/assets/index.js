  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const searchBackGround = document.querySelector(".search-back-ground");
    const logo = document.querySelector(".logo-anybuddy"); // Sélectionnez le logo

    const logoDefaultSrc = logo.src;
    const logoYellowSrc = logo.dataset.src;

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > searchBackGround.offsetHeight) {
        navbar.classList.add("navbar-fixed");
        logo.src = logoYellowSrc; // Changez l'attribut src du logo pour le logo jaune
      } else {
        navbar.classList.remove("navbar-fixed");
        logo.src = logoDefaultSrc; // Rétablissez l'attribut src du logo à la version par défaut
      }
    });   
  });