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

  const donationModal = document.getElementById("donationModal");
  const modalClose = document.getElementById("modalClose");
  const donationTriggers = document.querySelectorAll(".donation-trigger");
  const quickDonateBtn = document.getElementById("quickDonateBtn");
  const quickDonationAmount = document.getElementById("quickDonationAmount");

  function openDonationModal() {
    donationModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeDonationModal() {
    donationModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeDonationModal);
  }

  if (donationModal) {
    donationModal.addEventListener("click", (e) => {
      if (e.target === donationModal) {
        closeDonationModal();
      }
    });
  }

  const donationAmountBtns = document.querySelectorAll(".donation-amount-btn");
  donationAmountBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const amount = btn.dataset.amount;
      closeDonationModal();
      openDonationFormModal(amount);
    });
  });

  donationTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openDonationModal();
    });
  });

  if (quickDonateBtn) {
    quickDonateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const amount = quickDonationAmount ? quickDonationAmount.value : "";
      openDonationFormModal(amount ? "other" : null);
      if (amount) {
        const otherInput = document.querySelector(".other-amount-input");
        if (otherInput) {
          otherInput.value = amount;
        }
      }
    });
  }

  if (quickDonationAmount) {
    quickDonationAmount.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
  }

  const donationFormModal = document.getElementById("donationFormModal");
  const donationFormClose = document.getElementById("donationFormClose");
  const step1 = document.getElementById("donationStep1");
  const step2 = document.getElementById("donationStep2");
  const step3 = document.getElementById("donationStep3");
  const toStep2Btn = document.getElementById("toStep2");
  const toStep3Btn = document.getElementById("toStep3");
  const backToStep1Btn = document.getElementById("backToStep1");
  const backToStep2Btn = document.getElementById("backToStep2");
  const submitBtn = document.getElementById("submitDonation");

  let selectedAmount = null;

  function openDonationFormModal(amount) {
    donationFormModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (amount && amount !== "other") {
      const amountBtns = document.querySelectorAll(".amount-btn");
      amountBtns.forEach((btn) => {
        if (btn.dataset.amount === amount) {
          btn.classList.add("selected");
          selectedAmount = amount;
        } else {
          btn.classList.remove("selected");
        }
      });
    }

    showStep(1);
  }

  function closeDonationFormModal() {
    donationFormModal.classList.add("hidden");
    document.body.style.overflow = "";
    showStep(1);
  }

  function showStep(stepNum) {
    step1.classList.add("hidden");
    step2.classList.add("hidden");
    step3.classList.add("hidden");

    if (stepNum === 1) step1.classList.remove("hidden");
    if (stepNum === 2) step2.classList.remove("hidden");
    if (stepNum === 3) step3.classList.remove("hidden");
  }

  if (donationFormClose) {
    donationFormClose.addEventListener("click", closeDonationFormModal);
  }

  if (donationFormModal) {
    donationFormModal.addEventListener("click", (e) => {
      if (e.target === donationFormModal) {
        closeDonationFormModal();
      }
    });
  }

  if (toStep2Btn) {
    toStep2Btn.addEventListener("click", () => showStep(2));
  }
  if (toStep3Btn) {
    toStep3Btn.addEventListener("click", () => showStep(3));
  }
  if (backToStep1Btn) {
    backToStep1Btn.addEventListener("click", () => showStep(1));
  }
  if (backToStep2Btn) {
    backToStep2Btn.addEventListener("click", () => showStep(2));
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      closeDonationFormModal();
    });
  }

  const amountBtns = document.querySelectorAll(".amount-btn");
  amountBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      amountBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAmount = btn.dataset.amount;
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (donationModal && !donationModal.classList.contains("hidden")) {
        closeDonationModal();
      }
      if (
        donationFormModal &&
        !donationFormModal.classList.contains("hidden")
      ) {
        closeDonationFormModal();
      }
    }
  });

  const customSelect = document.getElementById("petSelect");
  if (customSelect) {
    const selectSelected = customSelect.querySelector(".select-selected");
    const selectItems = customSelect.querySelector(".select-items");
    const options = selectItems.querySelectorAll("div");

    selectSelected.addEventListener("click", (e) => {
      e.stopPropagation();
      selectItems.classList.toggle("select-hide");
      selectSelected.classList.toggle("select-arrow-active");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectSelected.textContent = option.textContent;
        selectSelected.style.color = "#000";
        options.forEach((opt) => opt.classList.remove("same-as-selected"));
        option.classList.add("same-as-selected");
        selectItems.classList.add("select-hide");
        selectSelected.classList.remove("select-arrow-active");
      });
    });

    document.addEventListener("click", () => {
      selectItems.classList.add("select-hide");
      selectSelected.classList.remove("select-arrow-active");
    });
  }

  const testimonialContainers = document.querySelectorAll(
    ".users_testimonials_container",
  );
  const testimonialPrev = document.getElementById("testimonialPrev");
  const testimonialNext = document.getElementById("testimonialNext");
  let currentSlide = 0;

  function getCardWidth() {
    const firstCard = document.querySelector(".users_testimonial_card");
    if (!firstCard) return 545;
    return firstCard.offsetWidth + 30;
  }

  function getCardsPerRow() {
    if (testimonialContainers.length === 0) return 3;
    return testimonialContainers[0].querySelectorAll(".users_testimonial_card")
      .length;
  }

  function getCardsToShow() {
    const inner = document.querySelector(".users_testimonials_inner");
    if (!inner) return 3;
    const containerWidth = inner.offsetWidth;
    const cardWidth = getCardWidth();
    return Math.max(1, Math.floor(containerWidth / cardWidth));
  }

  function updateTestimonialSlider() {
    const cardsPerRow = getCardsPerRow();
    const cardsToShow = getCardsToShow();
    const maxSlide = Math.max(0, cardsPerRow - cardsToShow);
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    const cardWidth = getCardWidth();
    const offset = currentSlide * cardWidth;
    testimonialContainers.forEach((container) => {
      container.style.transform = `translateX(-${offset}px)`;
      container.style.transition = "transform 0.3s ease";
    });
  }

  if (testimonialPrev) {
    testimonialPrev.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateTestimonialSlider();
      }
    });
  }

  if (testimonialNext) {
    testimonialNext.addEventListener("click", () => {
      const cardsPerRow = getCardsPerRow();
      const cardsToShow = getCardsToShow();
      const maxSlide = Math.max(0, cardsPerRow - cardsToShow);
      if (currentSlide < maxSlide) {
        currentSlide++;
        updateTestimonialSlider();
      }
    });
  }

  window.addEventListener("resize", updateTestimonialSlider);
});
