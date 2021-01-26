const elDarkModeToggler = document.querySelector("#js-dark-mode-toggler");
const elsAccordionTogglers = document.querySelectorAll(".js-accordion-toggler");
const elRegisterBtn = document.querySelector(".js-register-btn");
const elRegisterModal = document.querySelector(".register-popup");

elRegisterBtn.addEventListener("click", () => {
  elRegisterModal.classList.add("active");
});

elRegisterModal.addEventListener("click", (evt) => {
  if (
    evt.target.matches(".popup-mask") ||
    evt.target.matches(".js-close-modal")
  ) {
    elRegisterModal.classList.remove("active");
  }
});

elDarkModeToggler.addEventListener("change", (evt) => {
  if (elDarkModeToggler.checked) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
});

elsAccordionTogglers.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    el.nextElementSibling.classList.toggle("active");
  });
});
