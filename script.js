const bodyEl = document.querySelector("body");
const container = document.querySelector(".container");
const buttonsEl = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const rate = document.querySelector(".rate");
const submit = document.querySelector(".submit");

const selectRateBtn = function () {
  buttonsEl.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!btn.classList.contains("clicked")) {
        btn.classList.add("clicked");
      } else {
        btn.classList.remove("clicked");
      }
      rate.textContent = btn.textContent;
    });
  });
};
selectRateBtn();

const submitRating = function () {
  container.classList.add("hidden");
  modal.classList.remove("hidden");
};

const exitModal = function (e) {
  if (submitRating) {
    if (e.key === "Escape") {
      container.classList.remove("hidden");
      modal.classList.add("hidden");
      buttonsEl.forEach((btn) => {
        btn.classList.remove("clicked");
      });
    }
  }
};

submit.addEventListener("click", submitRating);
bodyEl.addEventListener("keyup", exitModal);
