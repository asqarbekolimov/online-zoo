document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navbar = document.querySelector(".navbar");

  if (burgerMenu && navbar) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navbar.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    const navLinks = navbar.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        navbar.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }
});
