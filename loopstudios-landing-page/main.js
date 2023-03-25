const hamburger = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navBar = document.querySelector(".navbar-nav");
const navbarToggle = () => navBar.classList.toggle("active");

hamburger.addEventListener("click", navbarToggle);
closeBtn.addEventListener("click", navbarToggle);
