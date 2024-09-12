// JavaScript

const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalInner = document.getElementById('modal-inner')
const consentForm = document.getElementById('consent-form')

modal.style.display = 'none'

setTimeout(function() {
    modal.style.display = 'inline'
}, 3000)

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get("fullname")

    setTimeout(function() {
        modalInner.innerHTML = '<h2>Your <span class="modal-display-text">data</span> is transfering ⌛</h2>'
    }, 1500)

    setTimeout(function() {
        modalInner.innerHTML = `<h2><span class="modal-display-text">${name},</span> you're account has been hacked! 👾</h2>
           <img class="hacker-img" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhldDA0cDdhNGp3Z2NzcmF4dDY1MGtoZ2Rob2JuYmxyNHMybjBmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/115BJle6N2Av0A/giphy.gif">
        `
     }, 5000)
})