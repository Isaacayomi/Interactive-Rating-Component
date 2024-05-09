const bodyEl = document.querySelector(".el");
const container = document.querySelector(".container");
const buttonsEl = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const rate = document.querySelector(".rate");
const submit = document.querySelector(".submit");

const selectRateBtn = function () {
  for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
      if (!buttonsEl[i].classList.contains("clicked")) {
        buttonsEl[i].classList.add("clicked");
      } else {
        buttonsEl[i].classList.remove("clicked");
      }

      //Stores the content of the button i clicked into rate innerText
      rate.textContent = buttonsEl[i].textContent;
    });
  }
};
selectRateBtn();

const submitRating = function () {
  container.classList.add("hidden");
  modal.classList.remove("hidden");
};

submit.addEventListener("click", submitRating);