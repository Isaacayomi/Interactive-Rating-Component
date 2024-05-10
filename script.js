const bodyEl = document.querySelector(".el");
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

submit.addEventListener("click", submitRating);

// container.style.border = "1px solid red";
