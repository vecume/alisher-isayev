const elsDarkModeToggler = document.querySelectorAll(".js-dark-mode-toggler");
const elsAccordionTogglers = document.querySelectorAll(".js-accordion-toggler");
const elsRegisterBtn = document.querySelectorAll(".js-register-btn");
const elRegisterModal = document.querySelector(".register-popup");
const elOpenMenuBtn = document.querySelector(".js-open-menu");
const elCloseMenuBtn = document.querySelector(".js-close-menu");
const elMenu = document.querySelector(".mobile-header-dropdown");

elOpenMenuBtn.addEventListener("click", () => {
  elMenu.classList.add("active");
  document.body.classList.add("overflow-hidden");
});

elCloseMenuBtn.addEventListener("click", () => {
  elMenu.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
});

elsDarkModeToggler.forEach((el) => {
  el.addEventListener("change", (evt) => {
    if (el.checked) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  });
});

elsRegisterBtn.forEach((el) => {
  el.addEventListener("click", () => {
    elRegisterModal.classList.add("active");
  });
});

elRegisterModal.addEventListener("click", (evt) => {
  if (
    evt.target.matches(".popup-mask") ||
    evt.target.matches(".js-close-modal")
  ) {
    elRegisterModal.classList.remove("active");
  }
});

elsAccordionTogglers.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    el.nextElementSibling.classList.toggle("active");
  });
});
