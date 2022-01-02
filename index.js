// Hamburger Menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
})

// Footer Date
const date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
