const navbar = document.querySelector(".navbar-nav");
const togglebtn = document.querySelector(".nav-toggle-btn");
const navitem = document.querySelectorAll(".nav-item");

const hamburgermenu = function () {
  navbar.classList.toggle("active");
};

togglebtn.addEventListener("click", hamburgermenu);

for (let i = 0; i < navitem.length; i++) {
  navitem[i].addEventListener("click", hamburgermenu);
}

// While scrolling the window, hide the navbar

window.addEventListener("scroll", () => {
  // Check if the user has scrolled down
  if (window.scrollY > 0) {
    navbar.classList.remove("active");
  }
});
