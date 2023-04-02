const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayOutput = document.getElementById("dd");
const monthOutput = document.getElementById("mm");
const yearOutput = document.getElementById("yy");
const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//! check if the input is valid and empty
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      parent.querySelector("label").style.color = "hsl(0, 100%, 67%)";
      i.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "This field is required";
      validator = false;
    } else if (monthInput.value == 2 && dayInput.value > 28) {
      if (yearInput.value % 4 != 0) {
        dayInput.parentElement.querySelector("label").style.color =
          "hsl(0, 100%, 67%)";
        dayInput.borderColor = "hsl(0, 100%, 67%)";
        dayInput.parentElement.querySelector("small").innerText =
          "Must be a valid day";
        validator = false;
      } else if (yearInput.value % 4 == 0 && dayInput.value > 29) {
        dayInput.parentElement.querySelector("label").style.color =
          "hsl(0, 100%, 67%)";
        dayInput.borderColor = "hsl(0, 100%, 67%)";
        dayInput.parentElement.querySelector("small").innerText =
          "Must be a valid day";
        validator = false;
      } else {
        parent.querySelector("label").style.color = "hsl(0, 1%, 44%)";
        i.style.borderColor = "hsl(0, 0%, 8%)";
        parent.querySelector("small").innerText = "";
        validator = true;
      }
    } else if (
      monthInput.value == 4 ||
      monthInput.value == 6 ||
      monthInput.value == 9 ||
      monthInput.value == 11
    ) {
      if (dayInput.value > 30) {
        dayInput.parentElement.querySelector("label").style.color =
          "hsl(0, 100%, 67%)";
        dayInput.borderColor = "hsl(0, 100%, 67%)";
        dayInput.parentElement.querySelector("small").innerText =
          "Must be a valid day";
        validator = false;
      } else {
        parent.querySelector("label").style.color = "hsl(0, 1%, 44%)";
        i.style.borderColor = "hsl(0, 0%, 8%)";
        parent.querySelector("small").innerText = "";
        validator = true;
      }
    } else if (dayInput.value > 31 || dayInput.value < 1) {
      dayInput.parentElement.querySelector("label").style.color =
        "hsl(0, 100%, 67%)";
      dayInput.borderColor = "hsl(0, 100%, 67%)";
      dayInput.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = false;
    } else if (monthInput.value > 12 || monthInput.value < 1) {
      monthInput.parentElement.querySelector("label").style.color =
        "hsl(0, 100%, 67%)";
      monthInput.style.borderBlockColor = "hsl(0, 100%, 67%)";
      monthInput.parentElement.querySelector("small").innerText =
        "Must be a valid month";
      validator = false;
    } else if (yearInput.value > year) {
      yearInput.parentElement.querySelector("label").style.color =
        "hsl(0, 100%, 67%)";
      yearInput.borderColor = "hsl(0, 100%, 67%)";
      yearInput.parentElement.querySelector("small").innerText =
        "Must be in the past";
      validator = false;
    } else if (yearInput.value.length > 4 || yearInput.value.length < 4) {
      yearInput.parentElement.querySelector("label").style.color =
        "hsl(0, 100%, 67%)";
      yearInput.borderColor = "hsl(0, 100%, 67%)";
      yearInput.parentElement.querySelector("small").innerText =
        "This is invalid year";
      validator = false;
    } else {
      parent.querySelector("label").style.color = "hsl(0, 1%, 44%)";
      i.style.borderColor = "hsl(0, 0%, 8%)";
      parent.querySelector("small").innerText = "";
      // dayInput.parentElement.querySelector("small").innerText = "";
      // monthInput.parentElement.querySelector("small").innerText = "";
      // yearInput.parentElement.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

//! calculate the age in terms of day, month and year
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    dayOutput.innerHTML = d;
    monthOutput.innerHTML = m;
    yearOutput.innerHTML = y;

    document.getElementById("result").className = "animatedResults";
  }
});

//! add the animation to the results
// function animatedage() {
//   document.getElementById("result").className = "animatedResults";
// }
