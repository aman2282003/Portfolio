//  menu icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// script for taking form output
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzw0aLQCUXWZZJjHEOAlE6wyz6IZHNLdgMZjqJWnzYA9Xr1stUjxZW5JS2eRaqtWW_G/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })





