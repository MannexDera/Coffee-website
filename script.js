// BUTTON NAVIGATION 
function redirectToAboutPage () {
  window.location.href = "about.html";
}

function redirectToMenuPage () {
  window.location.href = "menu.html";
}

// MOBILE NAVIGATION
const header = document.querySelector('.header');
const openBtn = document.querySelector('.nav-icon[aria-label="open-btn"]');
const closeBtn = document.querySelector('.nav-icon[aria-label="close-btn"]');

openBtn.addEventListener("click", () => {
  header.classList.add('open-nav');
});
closeBtn.addEventListener('click', () => {
  header.classList.remove('open-nav');
});

document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    header.classList.remove('open-nav');
  }
});