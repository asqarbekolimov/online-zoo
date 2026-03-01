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

  // Donation Modal
  const modal = document.getElementById("donationModal");
  const modalClose = document.getElementById("modalClose");
  const donationButtons = document.querySelectorAll("#donation-btn");

  function openModal() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  donationButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });
});
