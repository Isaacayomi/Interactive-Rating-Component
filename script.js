const container = document.querySelector('.container')
const buttonsEl = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal')
const rate = document.querySelector('.rate')
const submit = document.querySelector('.submit')
const rate_again = document.querySelector('.rate_again')

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener('click', function () {
        if (!buttonsEl[i].classList.contains('clicked')) {
            buttonsEl[i].classList.add('clicked')
        } else {
            buttonsEl[i].classList.remove('clicked')
        }

        //Stores the content of the button i clicked into rate innerText
        rate.textContent = buttonsEl[i].textContent
    })
}

submit.addEventListener('click', function () {
    container.classList.add('hidden')
    modal.classList.remove('hidden')
})
