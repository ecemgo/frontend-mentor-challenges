const adviceno = document.getElementById("adviceno");
const advice = document.getElementById("advice");
const button = document.querySelector(".btn");

//! generate the advice through fetch api
async function generate() {
  const res = await fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      adviceno.innerText = "Advice # " + data.slip.id;
      advice.innerText = '"' + data.slip.advice + '"';
      return ani();
    });
}

button.addEventListener("click", generate);

//! animate the advice
function ani() {
  if (advice.classList.contains("animate-out")) {
    advice.classList.remove("animate-out");
    advice.classList.add("animate-in");
  } else {
    advice.classList.add("animate-out");
    advice.classList.remove("animate-in");
  }
}

// button.addEventListener("click", function () {
//   if (advice.classList.contains("animate-out")) {
//     advice.classList.remove("animate-out");
//     advice.classList.add("animate-in");
//   } else {
//     advice.classList.add("animate-out");
//     advice.classList.remove("animate-in");
//   }
// });

//! change the mode to dark or light when clicking the toggle
toggle.onclick = () => {
  document.body.classList.toggle("darkmode");
  toggle.classList.toggle("active");
};
