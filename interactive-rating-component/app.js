const star = document.getElementById("star");
const ratingSection = document.querySelector(".rating");
const stateSection = document.querySelector(".state");
const submitBtn = document.getElementById("submit-btn");
const returnBtn = document.getElementById("return-btn");
const opt = document.querySelectorAll(".opt");
const rating = document.getElementById("rating");
let rate = null;

//! keep the rating
opt.forEach((option) => {
  option.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;
    console.log(rate);
  });
});

//! submit the rating
submitBtn.addEventListener("click", () => {
  if (rate) {
    rating.innerText = rate;
    console.log(rating);
    stateSection.classList.remove("hidden");
    ratingSection.classList.add("hidden");
  }
});

//! go back to the rating section
returnBtn.addEventListener("click", () => {
  ratingSection.classList.remove("hidden");
  stateSection.classList.add("hidden");
  const active = document.querySelector(".checked");
  if (active) {
    active.classList.remove("checked");
  }
});

//! change the mode to dark or light when clicking the toggle
function switchTheme() {
  document.body.classList.toggle("colormode");
  toggle.classList.toggle("active");
  if (document.body.classList.contains("colormode")) {
    star.src = "images/another-star.png";
    illustration.src = "images/illustration.svg";
    localStorage.setItem("theme", "color");
  } else {
    star.src = "images/icon-star.svg";
    illustration.src = "images/illustration-thank-you.svg";
    localStorage.setItem("theme", "dark");
  }
}

//! change theme
function updateTheme(themeMode) {
  if (themeMode === "color") {
    return document.body.classList.add("colormode");
  } else {
    document.body.classList.remove("colormode");
  }
}

//! store the theme in local storage
function initialTheme() {
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    return updateTheme("dark");
  }

  if (storedTheme === "color") {
    return updateTheme("color");
  }

  if (prefersDarkTheme.matches) {
    return updateTheme("dark");
  }
}
