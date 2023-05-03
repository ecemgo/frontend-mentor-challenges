const navbar = document.querySelector(".navbar-nav");
const togglebtn = document.querySelector(".nav-toggle-btn");
const navitem = document.querySelectorAll(".nav-item");

const hamburgermenu = function () {
  navbar.classList.toggle("active");
  togglebtn.classList.toggle("active");
};

togglebtn.addEventListener("click", hamburgermenu);

for (let i = 0; i < navitem.length; i++) {
  navitem[i].addEventListener("click", hamburgermenu);
}
