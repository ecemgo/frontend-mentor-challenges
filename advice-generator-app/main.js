const adviceno = document.getElementById("adviceno");
const advice = document.getElementById("advice");
const button = document.querySelector(".btn");

async function generate() {
  const res = await fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      adviceno.innerText = "Advice # " + data.slip.id;
      advice.innerText = '"' + data.slip.advice + '"';
    });
}

button.onclick = () => {
  generate();
};
