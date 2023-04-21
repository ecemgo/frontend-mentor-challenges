const sharebtn = document.querySelector(".sharebtn");
const popup = document.querySelector(".popup");

sharebtn.addEventListener("click", () => {
  sharebtn.classList.toggle("active");
  popup.classList.toggle("active");
});
